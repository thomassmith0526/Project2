const router = require('express').Router();
const {Job, Client, Employee, Task} = require('../../models');

router.get('/', async (req, res) => {
    try {
            const jobData = await Job.findAll({
        include:[{model: Client}, {model: Employee}, {model: Task,}]
            });
            res.status(200).json(jobData)
    }catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
         const jobData = await Job.findByPk(req.params.id, {
            include: [{ model: Client}, {model: Employee}, {model: Task}]
         });
    if(!jobData) {
        res.status(404).json({ message: 'no id for job'});
        return;
    } 
    res.status(200).json(jobData)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});


module.exports = router;