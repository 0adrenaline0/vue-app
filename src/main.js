import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/styles/main.scss'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needAuth)) {
    if (!store.state.auth) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})
