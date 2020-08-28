import Vue from 'vue'
import Axios from './plugins/axios'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/styles/main.scss'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  Axios,
  render: h => h(App)
});