import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
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
        if (store.state.auth) {
          next('/');
        } else {
          next();
        }
      },
      component: () => import('@/views/Login')
    },
    {
      path: '/unlogin',
      meta: { needAuth: true },
      beforeEnter: (to, from, next) => {
        store.commit('unsetAuth');
        next('/');
      }
    },
    {
      name: 'user',
      path: '/user/:username',
      meta: { needAuth: true },
      component: () => import('@/views/User')
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needAuth)) {
    if (!store.state.auth) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
