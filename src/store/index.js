import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users.js'
import posts from './modules/posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: localStorage.getItem('auth')
  },
  mutations: {
    loginUser: (state, data) => {
      state.auth = data;
      localStorage.setItem('auth', data);
    },
    logoutUser: state => {
      state.auth = null;
      localStorage.removeItem('auth');
    }
  },
  modules: {
    users,
    posts
  }
})
