
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
              {model: Task}
            ]
    })
    const taskData = await Task.findAll()
    const employeeData = await Employee.findAll()
    const clientData = await Client.findAll()
    const jobs = jobData.map((job) => job.get({ plain: true}))
    const tasks = taskData.map((task) => task.get({ plain: true}))
    const employees = employeeData.map((employee) => employee.get({ plain: true}))
    const clients = clientData.map((client) => client.get({plain:true}))
    res.render('all',{jobs,tasks, employees, clients})
    // res.json(employeeData)
    // console.log(jobs)
    res.render('all', { jobs })
})

router.get('/client', async (req, res) => {
    const taskData = await Task.findAll()
    const tasks = taskData.map((task) => task.get({ plain: true}))
    const clientData = await Client.findAll()
    const clients = clientData.map((client) => client.get({plain:true}))
    res.render('client',  {tasks,clients} )
})

router.get('/employee', async (req, res) => {
    const employeeData = await Employee.findAll()
    const employees = employeeData.map((employee) => employee.get({ plain: true}))

    res.render('employee', {employees})
})

// router.get('/employee/:id', async (req, res) => {
//     const employeeData = await Employee.findByPk(req.params.id);
//     const employee = employeeData.get({ plain: true });

//     res.render('employee', {employee});
// })

// router.get('/', async (req,res) =>{
//     const jobData = await Job.findAll()
//     const taskData = await Task.findAll()
//     const employeeData = await Employee.findAll()
//     const clientData = await Client.findAll()
//     const jobs = jobData.map((job) => job.get({ plain: true}))
//     const tasks = taskData.map((task) => task.get({ plain: true}))
//     const employees = employeeData.map((employee) => employee.get({ plain: true}))
//     const clients = clientData.map((client) => client.get({plain:true}))
//     res.render('all',{jobs,tasks, employees, clients})
// })
 
module.exports = router;