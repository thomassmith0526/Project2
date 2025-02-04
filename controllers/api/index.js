const router = require('express').Router();

const employeeRoutes = require('./employees-routes.js')
const clientRoutes = require('./client-routes.js')
const taskRoutes = require('./tasks-routes.js');
const jobRoutes = require('./job-routes.js')

router.use('/employees', employeeRoutes)
router.use('/clients', clientRoutes)
router.use('/tasks', taskRoutes);
router.use('/jobs', jobRoutes)

module.exports = router;