import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from '@/App';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});