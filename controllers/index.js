const router = require('express').Router();

const apiRoutes = require('./api')
const home = require('./homeRoute.js')

router.use('/', home);
router.use('/api', apiRoutes);

module.exports = router;

