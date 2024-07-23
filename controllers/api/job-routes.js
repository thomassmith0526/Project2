const router = require('express').Router();
const {Job, Client, Employee, Task} = require('../../models');

router.get('/', async (req, res) => {
    const jobData = await Job.findAll({
        include:[{model: Client}, {model: Employee}, {model: Task}]
    }
    )
    .catch((err) => {
        res.json(err);
    })
    res.json(jobData)


})

module.exports = router;