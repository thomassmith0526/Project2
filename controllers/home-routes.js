
const router = require('express').Router();
const {Employee, Job, Client, Task} = require('../models');

router.get('/', async (req, res) => {
    const jobData = await Job.findAll({
        include:[
            {
                model: Client,
                attributes: ['first_name', 'last_name', 'location']
            },
             {model: Employee},
            //   {model: Task}
            ]
    })
    const jobs =  jobData.map((job) => job.get({ plain:true}))
    // res.json(employeeData)
    // console.log(jobs)
    res.render('main', { jobs })
})

router.get('/client', async (req, res) => {
    const taskData = await Task.findAll()
    const tasks = taskData.map((task) => task.get({ plain: true}))

    res.render('client',  {tasks} )
})


 
module.exports = router;