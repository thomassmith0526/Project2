const router = require('express').Router();
const Employee = require('../../models/Employee');

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll().catch((err) => {
        res.json(err);
    })
    const employees = employeeData.map((employee) => employee.get({ plain: true }));
    res.render('', {employees})
})

router.get('/employees/:id', async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.params.id);
        if(!employeeData) {
            res.status(404).json({ message: 'There is no employee with that id'});
            return;
        }
        const employee = employeeData.get({ plain: true});
        res.render('',employee);
    } catch (err) {
        res.status(500).json(err);
    }
});