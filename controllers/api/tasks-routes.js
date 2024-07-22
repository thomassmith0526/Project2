const router = require('express').Router();
const Task = require('../../models/task');

//get route to get ALL Tasks 
router.get('/', async (req, res) => {
    try {
        const taskData = await Task.findAll();
        res.json(taskData);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get route to eventually grab them one by one 
router.get('/:id', async (req, res) => {
    try {
        const taskData = await Task.findByPk(req.params.id);
        if (!taskData) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json(taskData);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// post a new task 
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ error: 'Name and description are required' });
            return;
        }
        const taskData = await Task.create({ name, description });
        res.status(201).json(taskData);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//export
module.exports = router;