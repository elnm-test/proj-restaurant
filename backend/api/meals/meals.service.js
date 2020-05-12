/********************Mongo Service*********************/

const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query() {
    const collection = await dbService.getCollection('meals')
    try {
        var meals = await collection.find().toArray();
        return meals
    }
    catch (err) {
        console.log('Error At Query Function', err)
        throw err;
    }
}

async function getById(mealId) {
    const collection = await dbService.getCollection('meals');
    try {
        var meal = await collection.findOne({ "id": `${mealId}` })
        return meal;
    }
    catch (err) {
        console.log('Error At getById Function', err);
        throw err;
    }
}

async function remove(mealId) {
    const collection = await dbService.getCollection('meals');
    try {
        await collection.deleteOne({ "id": mealId })
        return;
    }
    catch (err) {
        console.log('Error At Remove Function');
        throw err;
    }
}

async function add(meal) {
    const collection = await dbService.getCollection('meals');
    try {
        await collection.insertOne(meal);
        return meal;
    }
    catch (err) {
        console.log('Error At Add Function');
        throw err;
    }
}

async function update(meal) {
    const collection = await dbService.getCollection('meals');
    meal._id = ObjectId(meal._id)
    try {
        await collection.replaceOne({ "id": meal.id }, { $set: meal })
        return meal;
    }
    catch (err) {
        console.log('Error At Update Function');
        throw err;
    }

}


/************************Json service***********************/

// const fs = require('fs')
// const path = require('path')
// var gMeals = _createMeals();

// module.exports = {
//     query,
//     getById,
//     add,
//     update,
//     remove
// }

// function _createMeals() {
//     return require('../../data/meals2.json');
// }

// async function query() {
//     return gMeals;
// }

// async function getById(id) {
//     var meal = gMeals.find(meal => {
//         return meal.id === id
//     })
//     return Promise.resolve(meal)
// }

// async function remove(id) {
//     var idx = gMeals.findIndex(meal => {
//         return meal.id === id
//     })
//     gMeals.splice(idx, 1);
//     _saveToFile();
//     return Promise.resolve();
// }

// async function update(newMeal) {
//     var idx = gMeals.findIndex((meal) => {
//         return meal.id === newMeal.id
//     })
//     gMeals.splice(idx, 1, newMeal)
//     _saveToFile();
//     return Promise.resolve(newMeal);
// }

// async function add(meal) {
//     gMeals.push(meal)
//     _saveToFile()
//     return Promise.resolve(meal);
// }



// function _saveToFile() {
//     return fs.writeFileSync(path.join(__dirname, '../../data/meals2.json'), JSON.stringify(gMeals, null, 2))
// }

/************************End Of Json service***********************/

