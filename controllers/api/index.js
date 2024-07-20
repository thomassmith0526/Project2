const router = require('express').Router();

const employeeRoutes = require('./employees-routes.js')

router.use('/employees', employeeRoutes)

module.exports = router;