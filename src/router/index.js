import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home')
    },
    {
      path: '/posts',
      component: () => import('@/views/Posts')
    },
    {
      path: '/login',
      beforeEnter: (to, from, next) => {
        if (store.state.auth)
          next('/');
        else
          next();
      },
      component: () => import('@/views/Login')
    },
    {
      path: '/unlogin',
      beforeEnter: (to, from, next) => {
        if (store.state.auth)
          store.commit('unsetAuth');
        next('/');
      }
    },
    {
      name: 'user',
      path: '/user/:username',
      beforeEnter: (to, from, next) => {
        if (store.state.auth)
          next('/');
        else
          next();
      },
      component: () => import('@/views/User')
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    }
  ]
})
