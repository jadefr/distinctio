import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BackToTop from 'vue-backtotop'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/sass/index.sass'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BackToTop)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
