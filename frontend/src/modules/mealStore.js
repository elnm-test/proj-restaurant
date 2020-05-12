import mealService from '../services/mealService.js'
import utilService from '../services/utilService.js'

var sessionMeals = [];
if (sessionStorage.meals) sessionMeals = JSON.parse(sessionStorage.meals)

export default {
    state: {
        meals: sessionMeals
    },
    getters: {
        meals(state) {
            return state.meals;
        },
        starters(state) {
            return state.meals.filter((meal) => {
                return meal.type.includes('starter')
            })
        },
        mains(state) {
            return state.meals.filter((meal) => {
                return meal.type.includes('main')
            })
        },
        desserts(state) {
            return state.meals.filter((meal) => {
                return meal.type.includes('dessert')
            })
        }
    },
    mutations: {
        initMeals(state, { meals }) {
            state.meals = meals;
            utilService.saveToSession('meals', meals)
        },
        removeMeal(state, { id }) {
            let idx = state.meals.findIndex((meal) => {
                return meal.id === id;
            })
            state.meals.splice(idx, 1);
            // utilService.saveToSession('meals', state.meals)
        },
        updateMeal(state, { updatedMeal }) {
            let idx = state.meals.findIndex((meal) => {
                // console.log(meal.id, updatedMeal.id)
                return meal.id === updatedMeal.id
            })
            state.meals.splice(idx,1,updatedMeal);
        }
    },
    actions: {
        async loadMeals(context) {
            var meals = await mealService.query();
            context.commit({ type: "initMeals", meals })
        },
        async removeMeal(context, { id }) {
            await mealService.remove(id);
            context.commit({ type: "removeMeal", id })
        },
        async updateMeal(context, { meal }) {
            let updatedMeal = await mealService.update(meal);
            context.commit({ type:"updateMeal", updatedMeal })
        }
    }
}