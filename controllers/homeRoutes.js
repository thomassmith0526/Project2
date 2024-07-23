
const router = require('express').Router()
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll()
    const employees =  employeeData.map((employee) => employee.get({ plain:true}))
    res.render('all', {employees} )
})

module.exports = router;