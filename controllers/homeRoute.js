const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('jobs');
});

module.exports = router;