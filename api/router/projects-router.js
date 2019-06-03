const router = require('express').Router();

const Projects = require('./projects-model.js');

router.post('/', async (req, res) => {
    try {
        project = await Projects.add(req.body)
        res.status(201).json(project)
    } catch(err){
        res.status(500).json(err.message)
    }
})

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find()
        if (projects){
            res.status(200).json(projects)
        } else {
            res.status(404).json({error: "No projects found"})
        }
    } catch(err){
        res.status(500).json(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id)
        const actions = await Projects.findProjectActions(req.params.id)
        if (project){
            res.status(200).json({project, actions})
        } else {
            res.status(404).json({error: "No project with that ID"})
        }

    } catch(err) {
        res.status(500).json(err.message)
    }
})

router.get('/:id/actions', async (req, res) =>{
    try {
        const actions = await Projects.findProjectActions(req.params.id)
        if (actions) {
            res.status(200).json(actions)
        } else {
            res.status(404).json({error: "No project at that ID"})
        }
    } catch(err){
        res.status(500).json(err.message)
    }
})


module.exports = router;