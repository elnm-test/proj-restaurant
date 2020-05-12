import Vue from 'vue'
import Vuex from 'vuex'
import mealStore from '../modules/mealStore.js'
import bookingTabelStore from '../modules/bookingTableStore.js'
import userStore from '../modules/userStore.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mealStore,
    bookingTabelStore,
    userStore
  }
})
