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


module.exports = router;