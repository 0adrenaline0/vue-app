import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: JSON.parse(localStorage.getItem('auth')),
    baseURL: 'https://0adrenaline0.pythonanywhere.com',
  },
  mutations: {
    setAuth: (state, data) => {
      state.auth = data;
      localStorage.setItem('auth', JSON.stringify(data));
    },
    unsetAuth: state => {
      state.auth = null;
      localStorage.removeItem('auth');
    }
  },
  actions: {
    login: ({ state, commit }, data) => {
      return Vue.axios.post(state.baseURL + '/login', data)
      .then(response => {
        if (response.data) {
          commit('setAuth', data)
          return true;
        } else {
          return false;
        }
      });
    },
    getPosts: ({ state }, data) => {
      return Vue.axios.post(state.baseURL + '/getPosts', data)
      .then(response => response.data);
    },
    createPost: ({ state }, data) => {
      return Vue.axios.post(state.baseURL + '/createPost', data)
      .then(response => response.data);
    }
  }
})
