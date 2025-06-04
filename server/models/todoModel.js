import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean, 
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;