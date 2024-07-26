const router = require('express').Router();
const Employee = require('../../models/Employee')

router.get('/', async (req, res) => {
    const employeeData = await Employee.findAll().catch((err) => {
        res.json(err);
    })
    res.json(employeeData)
    const employees = employeeData.map((employee) => employee.get({ plain: true }));
    res.render('employee', {employees})
})

router.get('/:id', async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.params.id);
        if(!employeeData) {
            res.status(404).json({ message: 'There is no employee with that id'});
            return;
        }
        res.json(employeeData)
        const employee = employeeData.get({ plain: true});
        // res.render('employee', employee);
        return employee;
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const employeeData = await Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        });
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
