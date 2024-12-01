const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => console.log("connected!"));

mongoose.connect('mongodb+srv://zzsdrt354:SrQzx3GgKGM9cer@cluster0.fktok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const TodoSchema = {
    todo: String,
    Date: Object,
    Done: Boolean,
}

const Todo = mongoose.model("Todos", TodoSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/addTodo", async (req, res) => {
    const a = { todo, Modifyed_Date, done } = req.body;
    try {
        const todos = new Todo({
            todo: todo,
            Date: Modifyed_Date,
            Done: done,
        })
        await todos.save();
        console.log("Succefully Todo added!", todos);
        res.status(200).json({ message: "Todo added successfuly", addedTodo: todos })

    } catch (error) {
        console.error("ERROR", error);
        res.status(500).json({ message: "Failed to add todo", error: error.message });
    }
});

app.get("/getTodos", async (req, res) => {
    const data = await Todo.find();
    res.send(data);
})

app.put("/doneTodo/:id", async (req, res) => {
    const { done } = req.body;
    const clickedId2 = req.params.id;
    try {
       const data = await Todo.findByIdAndUpdate(clickedId2,{Done: done}, {new: true});
       if(!data){
        return res.status(404).send("Todo not found!");
       }
        console.log("Todo was Done!", data);
        res.status(200).send({ message: "Todo was done!", DoneTodo: data });
    } catch (error) {
        console.error("error:", error);
        res.status(500).send({ message: "Failed Done Todo!", error: error.message });
    }
})
app.put("/editTodo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { todo } = req.body;
        const data = await Todo.findByIdAndUpdate(id, { todo: todo }, { new: true });
        if (!data) {
            return res.status(404).send("Todo not found!");
        }
        console.log("Successfully data edited:", data);
        res.status(200).json({ message: "Todo succefully edited", edit_todo: data });
    } catch (err) {
        console.error("erroe", err);
        res.status(500).send("An occurred");
    }

});

app.delete("/delete/:id", async (req, res) => {
    try {
        const clickedId = req.params.id;
        const data = await Todo.findByIdAndDelete(clickedId);
        if (!data) {
            return res.status(400).send("no todos!")
        }
        console.log("succefully data deleted:", data);
        res.status(200).json({ message: "Todo successfully deleted", deletedTodo: data });

    } catch (error) {
        console.error("error:", error);
        res.status(500).send("An occurred")
    }
});

app.listen(9089, () => {
    console.log(`APP RUNNING ON ${9089}`);
})