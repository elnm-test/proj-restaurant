const userService = require('./users.service')
module.exports = {
    getUsers,
    getUser,
    addUser,
    removeUser,
    updateUser
}

async function getUsers(req, res) {
    let users = await userService.query();
    res.send(users);
}

async function getUser(req, res) {
    let id = req.params.id;
    let user = await userService.getById(id);
    res.send(user);
}

async function addUser(req, res) {
    let newUser = req.body;
    let user = await userService.add(newUser);
    res.send(user);
}

async function removeUser(req,res){
    let id = req.params.id;
    await userService.remove(id);
    res.send()
}

async function updateUser(req,res){
    let user = req.body;
    let newUser = await userService.update(user);
    res.send(newUser)
}