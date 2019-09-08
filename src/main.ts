import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import './plugins/element.js'
import axios from "./utils/http";

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
