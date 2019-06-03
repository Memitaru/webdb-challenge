const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./router/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the API"}.message)
})


module.exports = server;