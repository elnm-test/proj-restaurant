<template>
  <section class="menu-container container base-padding">
    <div v-if="meal" @click.self="exitEditMeal" class="menu-screen">
      <div class="edit-container">
        <div class="edit-header-box flex row center space-between">
          <h2>Edit Meal Details</h2>
          <span class="exit" @click="exitEditMeal">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="edit-input-box">
          <span>Title</span>
          <input v-model="meal.name" type="text" class="title" />
        </div>
        <div class="edit-input-box">
          <span>Ingredients</span>
          <textarea v-model="meal.Ingredients" rows="5" cols="20"></textarea>
        </div>
        <div class="edit-input-box">
          <span>Price</span>
          <input v-model="meal.price" type="number" />
        </div>
        <div class="edit-input-box">
          <span>Meal Image</span>
          <textarea v-model="meal.imgUrl" rows="5" cols="20"></textarea>
        </div>
        <div class="edit-input-box">
          <span>Vegetrian</span>
          <input v-model="meal.isVege" type="checkbox" />
        </div>
        <div class="edit-input-box">
          <span>Rating</span>
          <input v-model="meal.rating" type="number" />
        </div>
        <div class="edit-input-box">
          <span>Type</span>
          <select>
            <option value="starter">Starter</option>
            <option value="main">Main Course</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <div class="edit-btns flex row center">
          <button @click="setMealChanges" class="confirm-changes">Confirm Changes</button>
          <button @click="exitEditMeal" class="cancel">Cancel</button>
        </div>
      </div>
    </div>
    <div class="flex column center">
      <h2 class="flex column header-wrapper">
        <span class="header-primary">Get Taste Of</span>
        <span class="header-secondary">Our Menu</span>
      </h2>
    </div>
    <h3>Startets</h3>
    <ul class="clean-list">
      <meal-preview
        @getDetails="getMealDetails"
        v-for="meal in starters"
        :key="meal.id"
        :meal="meal"
      ></meal-preview>
    </ul>
    <h3>Main Courses</h3>
    <ul class="clean-list">
      <meal-preview @getDetails="getMealDetails" v-for="meal in mains" :key="meal.id" :meal="meal"></meal-preview>
    </ul>
    <h3>Desserts</h3>
    <ul class="clean-list">
      <meal-preview
        @getDetails="getMealDetails"
        v-for="meal in desserts"
        :key="meal.id"
        :meal="meal"
      ></meal-preview>
    </ul>
  </section>
</template>

<script>
import mealPreview from "../components/MealPreview.vue";
export default {
  data() {
    return {
      meal: null
    };
  },
  created() {
    this.$store.dispatch({ type: "loadMeals" });
  },
  mounted() {
    document.querySelector("header").classList.remove("staff-header");
    document.querySelector("header").classList.add("header-background");
  },
  methods: {
    getMealDetails(meal) {
      this.meal = JSON.parse(JSON.stringify(meal));
    },
    exitEditMeal() {
      this.meal = null;
    },
    async setMealChanges() {
      this.meal.rating = +this.meal.rating;
      this.meal.price = +this.meal.price;
      await this.$store.dispatch({ type: "updateMeal", meal: this.meal });
      console.log("Meal Has been Updated !");
    }
  },
  computed: {
    starters() {
      return this.$store.getters.starters;
    },
    mains() {
      return this.$store.getters.mains;
    },
    desserts() {
      return this.$store.getters.desserts;
    }
  },
  components: {
    mealPreview
  }
};
</script>