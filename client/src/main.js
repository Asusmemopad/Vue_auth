import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './state/store'

window.axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
