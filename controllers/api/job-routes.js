const router = require('express').Router();
const {Job, Client, Employee, Task} = require('../../models');

router.get('/', async (req, res) => {
    const jobData = await Job.findAll({
        include:[
            {
                model: Client,
                attributes: ['first_name', 'last_name', 'location']
            },
             {model: Employee},
              {model: Task}
            ]
    })
    .catch((err) => {
        res.json(err);
    })
    res.json(jobData)
})
   

router.get('/:id', async (req, res) => {
    try {

        const jobData = await Job.findByPk(req.params.id);
        if(!jobData) {

            res.status(404).json({ message: 'There is no job here'});
            return;
        }
        res.json(jobData)

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const jobData = await Job.create(req.body);

        res.status(200).json(jobData);
    } catch (err) {

        res.status(400).json(err);
    }
});

module.exports = router;