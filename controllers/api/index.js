const router = require('express').Router();

const employeeRoutes = require('./employees-routes.js')
const clientRoutes = require('./client-routes.js')

router.use('/employees', employeeRoutes)
router.use('/clients', clientRoutes)

module.exports = router;