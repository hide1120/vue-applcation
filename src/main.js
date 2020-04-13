import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('Pagetop', require('./components/Pagetop').default);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
