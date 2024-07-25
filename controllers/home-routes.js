
const router = require('express').Router();
const Employee = require('../models/Employee');
const Task = require('../models/task');

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll()
    // const employees =  employeeData.map((employee) => employee.get({ plain:true}))
    // res.json(employeeData)
    res.render('all')
})

router.get('/add-client', async (req, res) => {
    const taskData = await Task.findAll()
    const tasks = taskData.map((task) => task.get({ plain:true}))
    res.render('client', {tasks})
})

module.exports = router;