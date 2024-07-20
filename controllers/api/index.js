const router = require('express').Router();

const employeeRoutes = require('./employees-routes.js')

router.use('/', employeeRoutes)

module.exports = router;