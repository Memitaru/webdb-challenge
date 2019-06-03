const db = require('../dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    getProjectActions
}

function find() {
    return db('projects')
    .first()
}

function findById(id){
    return db('projects')
    .where({id: id})
    .first()
}

function add(project){
    return db('projects')
    .insert(project, 'id')
    .then(id => {
        return findById(id[0])
    })
}

function getProjectActions(id){
    return db('projects')
    .where({id: id})
    .then(projects => {
        return db('actions')
        .where({project_id: id})
        .then(actions => {
            return projects.actions = actions;
        })
    })
}