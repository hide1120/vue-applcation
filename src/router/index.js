import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // Bootstrap
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Company from '../views/Company.vue'
import Default from '../views/Default.vue'
import NotFound from '../views/NotFound.vue' //Not Found

Vue.use(VueRouter)
Vue.use(BootstrapVue) // Bootstrap

import 'bootstrap/dist/css/bootstrap.css' // Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' // Bootstrap

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/default',
      name: 'Default',
      component: Default
    },
  // Not Found
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
