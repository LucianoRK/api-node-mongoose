const {Router} = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message : "get"})
})

routes.post('/', (req, res) => {
    return res.json({message : "post"})
})

routes.put('/', (req, res) => {
    return res.json({message : "put"})
})

routes.delete('/', (req, res) => {
    return res.json({message : "delete"})
})

module.exports = routes;