import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Table from '../views/Table.vue'
import Staff from '../views/Staff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path:'/menu',
    component: Menu
  },
  {
    path: '/table',
    component:Table
  },
  {
    path: '/staff',
    component: Staff
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
}
})

export default router
