<template>
  <li class="menu-row flex row center justify-start">
    <img :src="`${meal.imgUrl}`" class="meal-img" />
    <div class="details-wrapper flex row center space-between">
      <div class="meal-details-container flex column align-start">
        <h3 class="meal-name">
          {{meal.name}}
          <span v-if="meal.isVege">
            <i class="vege-icon fas fa-leaf"></i>
          </span>
          <span v-if="isRecommended">
            <i class="recommended-icon fas fa-medal"></i>
          </span>
        </h3>
        <div class="meal-info flex row center space-between">
          <span class="meal-ingredients">{{mealIngredients}}</span>
        </div>
      </div>
      <div v-if="isUserLoggedIn" class="employe-box flex row center space-between">
        <span @click="editMeal()">
          <i class="edit fas fa-user-edit"></i>
        </span>
        <span @click="removeMeal()">
          <i class="remove far fa-trash-alt"></i>
        </span>
      </div>
      <div class="meal-price flex row center">{{currencySymbol}} {{meal.price}}</div>
    </div>
    <div v-if="isUserLoggedIn" class="employe-box-mobile flex row center space-between">
      <span @click="editMeal()">
        <i class="edit fas fa-user-edit"></i>
      </span>
      <span @click="removeMeal()">
        <i class="remove far fa-trash-alt"></i>
      </span>
    </div>
  </li>
</template>
<script>
export default {
  props: ["meal"],

  data() {
    return {
      currency: "US",
      recommendedFactor: 4.7
    };
  },
  methods: {
    async removeMeal() {
      await this.$store.dispatch({ type: "removeMeal", id: this.meal.id });
    },
    editMeal() {
      this.$emit("getDetails", this.meal);
    }
  },
  computed: {
    mealIngredients() {
      return this.meal.Ingredients.join(", ");
    },
    currencySymbol() {
      var currencyMap = { US: "$" };
      return currencyMap[this.currency];
    },
    isRecommended() {
      return this.meal.rating > this.recommendedFactor;
    },
    isUserLoggedIn() {
      var user = this.$store.getters.loggedInUser;
      if (user) return true;
      else return false;
    }
  }
};
</script>