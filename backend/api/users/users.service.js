/***************************Mongo Service*********************************/

const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    getByEmail,
    update,
    add,
    remove
}

async function query() {
    const collection = await dbService.getCollection('users')
    try {
        var users = await collection.find().toArray();
        return users;

    }
    catch (err) {
        console.log('Error User Query Function');
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('users');
    try {
        var user = await collection.findOne({ "id": userId });
        return user;
    }
    catch (err) {
        console.log('Error User GetById Function')
        throw err;
    }
}

async function getByEmail(email) {
    const collection = await dbService.getCollection('users');
    try {
        var user = await collection.findOne({ "email": email });
        return user;
    }
    catch (err) {
        console.log('Error User GetByEmail Function');
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('users');
    user._id = ObjectId(user._id)
    try {
        await collection.repalceOne({ "id": user.id }, { $set: user })
        return user;
    }
    catch (err) {
        console.log('Error User Update Funciton');
        throw err;
    }
}

async function add(user) {
    const collection = dbService.getCollection('users');
    try {
        await collection.insertOne(user);
        return user;

    }
    catch (err) {
        console.log('Error User Add Function');
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('users');
    try {
        await collection.deleteOne({ "id": userId });
        return;

    }
    catch (err) {
        console.log('Error User Remvoe Function');
        throw err;
    }
}
















/***************************End Mongo Service*********************************/


/***************************User Json Service*********************************/

// const fs = require('fs');
// const path = require('path')

// var gUsers = []
// _createUsers();

// module.exports = {
//     query,
//     getByEmail,
//     getById,
//     add,
//     update,
//     remove
// }

// async function _createUsers() {
//     gUsers = require('../../data/users.json')
// }

// async function query() {
//     return gUsers;
// }

// async function getById(id) {
//     var user = gUsers.find((user) => {
//         return user.id === id
//     });

//     return user;
// }

// async function getByEmail(email) {
//     var user = gUsers.find((user) => {
//         return user.email === email
//     })
//     return user;

// }

// async function add(user) {
//     gUsers.push(user);
//     _saveToFile();
//     return user;
// }

// async function update(newUser) {
//     var idx = gUsers.findIndex((user) => {
//         return user.id === newUser.id
//     })
//     gUsers.splice(idx, 1, newUser);
//     _saveToFile();
//     return newUser;
// }

// async function remove(id) {
//     var idx = gUsers.findIndex((user) => {
//         return user.id === id
//     });
//     gUsers.splice(idx, 1);
//     _saveToFile();
//     return;
// }



// function _saveToFile() {
//     fs.writeFileSync(path.join(__dirname ,'../../data/users.json'), JSON.stringify(gUsers, null, 2))
// }


/***************************End User Json Service*********************************/

// console.log(getByEmail("john@gmail.com"))
// getById(3).then(data => console.log(data));
// remove(3).then(data => console.log(data));
// query().then(data => console.log(data))
// update({
//     id:1,
//     userName:'Eli'
// }).then( data => console.log(data))
// query().then(data => console.log(data))
// add({id:5,dsada:'dsadsad'})
// query().then(data => console.log(data))
