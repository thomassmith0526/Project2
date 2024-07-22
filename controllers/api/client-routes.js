const router = require('express').Router();
const Client = require('../../models/Client')

router.get('/', async (req, res) => {
    const clientData = await Client.findAll().catch((err) => {
        res.json(err);
    })
    res.json(clientData)
})

router.get('/:id', async (req, res) => {
    try {
        const clientData = await Client.findByPk(req.params.id);
        if(!clientData) {
            res.status(404).json({ message: 'There is no client with that id'});
            return;
        }
        res.json(clientData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const clientData = await Client.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            location: req.body.location,
        });
        res.status(200).json(clientData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
