require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection erron error"));
db.once('open', () => console.log("connected!"));

mongoose.connect(process.env.Mongoose_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const TodoSchema = {
    todo: String,
    Date: Object,
    Done: Boolean,
}

const Todo = mongoose.model("Todos", TodoSchema);

const recycle_bin_todo_Schema = {
    todo: String,
    Date: Object,
    Done: Boolean,
}

const RecycleBinTodo = mongoose.model("RecycleBinTodo", recycle_bin_todo_Schema);

module.exports = { Todo, RecycleBinTodo };
