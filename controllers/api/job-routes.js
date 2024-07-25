const router = require('express').Router();
const Job = require('../../models/Job')

router.get('/', async (req, res) => {
    const jobData = await Job.findAll().catch((err) => {
        res.json(err);
    })
    res.json(jobData)
})

router.get('/:id', async (req, res) => {
    try {
        const jobData = await Client.findByPk(req.params.id);
        if(!jobData) {
            res.status(404).json({ message: 'There is no job with that id'});
            return;
        }
        res.json(jobData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const jobData = await Job.create({
            client_id: req.body.client_id,
            employee_id: req.body.employee_id,
            task_id: req.body.task_id,
            date: req.body.date,
        });
        res.status(200).json(jobData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;