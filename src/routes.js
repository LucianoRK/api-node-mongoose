const {Router} = require('express');
const {uuid} = require('uuidv4')

const routes = new Router();

//id, name, email, password
const users = [];


// Listar todos
routes.get('/users', (req, res) => {
    return res.json(users)
})

// Listar apenas um registro
routes.get('/users/:id', (req, res) => {
    const {id} = req.params;

    const userIndex = users.findIndex(user => user.id == id);

    if(userIndex == -1) {     
        return res.status(400).json({message : "Usuário não encontrado!"});
    } 

    return res.json(users[userIndex])
})

//Criar
routes.post('/users', (req, res) => {
    const {id, name, email, password} = req.body;

    const user = {
        id:uuid(),
        name, 
        email, 
        password
    }

    users.push(user);

    return res.json(user)
})

//Alterar
routes.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;

    const userIndex = users.findIndex(user => user.id == id);

    if(userIndex == -1) {     
        return res.status(400).json({message : "Usuário não encontrado!"});
    } 

    const user = {
        id,
        name, 
        email, 
        password
    }

    users[userIndex] = user;

    return res.json({message : "Usuário alterado com sucesso!"})
})

//Deletar
routes.delete('/users/:id', (req, res) => {

    const {id} = req.params;

    const userIndex = users.findIndex(user => user.id == id);

    if(userIndex == -1) {     
        return res.status(400).json({message : "Usuário não encontrado!"});
    } 

    users.splice(userIndex, 1);

    return res.status(204).send();
})

module.exports = routes;