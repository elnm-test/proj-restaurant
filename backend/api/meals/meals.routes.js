const express = require('express');
const router = express.Router();
const { getMeals, removeMeal, updateMeal } = require('./meals.contorller')
// const { requireAuth } = require('../../middlewares/requireAuth.middleware')

router.get('/', getMeals);
router.delete('/:id', removeMeal)
router.put('/', updateMeal);



module.exports = router;