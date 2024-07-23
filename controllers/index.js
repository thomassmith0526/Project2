const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

//handlebars render routes
router.use('/', homeRoutes);
//api routes
router.use('/api', apiRoutes);

module.exports = router;

