import express from 'express';
import Todo from '../models/todoModel.js';

const router = express.Router();

// create todo
router.post('/', async (req, res) => {
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
})

// get all todos
router.get('/', async(req, res) => {
    const todo = await Todo.find();
    res.json(todo);
})

// delete todo
router.delete('/:id', async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({message: 'Deleted'});
})

// mark as done
router.post('/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { done: req.body.done },
        { new: true}
    )

    res.json(updatedTodo);
})

export default router;