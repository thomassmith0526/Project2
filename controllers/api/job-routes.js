const router = require('express').Router();
const Job = require('../../models/job');

router.get('/', async (req, res) => {
    const jobData = await Job.findAll().catch((err) => {
        res.json(err);
    })
    res.json(jobData)


})

module.exports = router;