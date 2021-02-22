import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import '@/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});