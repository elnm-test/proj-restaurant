
const mealService = require('./meals.service')


async function getMeals(req,res){
    var meals = await mealService.query();
    res.send(meals)
}

async function removeMeal(req,res){
    const id = +req.params.id;
    await mealService.remove(id);
    res.end();
}

async function updateMeal(req, res){
    let updatedMeal = req.body;
    let meal = await mealService.update(updatedMeal);
    res.send(meal)
}


module.exports = {
    getMeals,
    removeMeal,
    updateMeal
}