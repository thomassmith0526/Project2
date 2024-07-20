const router = require('express').Router();

const apiRoutes = require('./api')
const allRoutes = require('./api/all-routes.js')

router.use('/', allRoutes);
router.use('/', apiRoutes);

module.exports = router

