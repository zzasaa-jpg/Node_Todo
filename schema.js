require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection erron error"));
db.once('open', () => console.log("connected!"));

mongoose.connect(process.env.Mongoose_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const p_v = process.env;
const _988 = p_v.qwazsbdtq_97866241655, _756 = p_v.axswnwkwn_76627262622, _535 = p_v.zekrtrqtL_86677118165, _656 = p_v.vigewugwj_28633831321, _233 = p_v.syrKehjKk_23087178872, _454 = p_v.pjeoewaaz_08973286282;
const TodoSchema = {
    _988: _756,
    _535: _656,
    _233: _454,
}


const Todo = mongoose.model("Todos", TodoSchema);

const recycle_bin_todo_Schema = {
    _988: _756,
    _535: _656,
    _233: _454,
}

const RecycleBinTodo = mongoose.model("RecycleBinTodo", recycle_bin_todo_Schema);

module.exports = { Todo, RecycleBinTodo };
