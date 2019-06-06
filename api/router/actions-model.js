const db = require('../dbConfig.js');

module.exports = {
    get,
    getById,
    add
}

function get(){
    return db('actions')
    .first()
}

function getById(id){
    return db('actions')
    .where({id: id})
    .first()
}

function add(action){
    return db('actions')
    .insert(action)
    .then(id => {
        return getById(id[0])
    })
}