const router = require('express').Router();

const Actions = require('./actions-model.js');

router.get('/', async (req, res) => {
    try{
        const actions = await Actions.get();
        if (actions) {
            res.status(200).json(actions)
        } else {
            res.status(404).json({error: "No actions found"})
        }
    } catch(err) {
        res.status(500).json(err.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const action = await Actions.add(req.body)
        res.status(201).json(action)
    } catch(err){
        res.status(500).json(err.message)
    }
})

module.exports = router;