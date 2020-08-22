import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '@/views/Home'
import Posts from '@/views/Posts'
import Login from '@/views/Login'
import User from '@/views/User'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'posts',
      path: '/posts',
      component: Posts
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.auth)
          next();
        else {
          console.log(store.auth)
          next(false);
        }
      }
    },
    {
      path: '/unlogin',
      meta: { needAuth: true },
      beforeEnter: (to, from, next) => {
        store.commit('logoutUser');
        next({ name: 'home' });
      }
    },
    {
      name: 'user',
      path: '/user/:username',
      component: User,
      meta: { needAuth: true }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});