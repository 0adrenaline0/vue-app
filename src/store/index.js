import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: JSON.parse(localStorage.getItem('auth')),
    posts: [
      {
        id: 1,
        date: 1596283200,
        author: 'admin',
        title: 'Lorem ipsum...',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Non consectetur a erat nam at lectus urna duis convallis. Semper auctor neque vitae tempus. Dictum fusce ut placerat orci nulla pellentesque dignissim. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Sit amet justo donec enim. Nam libero justo laoreet sit. Accumsan lacus vel facilisis volutpat. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Faucibus nisl tincidunt eget nullam non nisi est sit. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Orci ac auctor augue mauris augue neque gravida. Scelerisque eu ultrices vitae auctor. Sed felis eget velit aliquet sagittis id consectetur purus ut. Urna nec tincidunt praesent semper. Morbi blandit cursus risus at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Mauris nunc congue nisi vitae suscipit tellus mauris.'
      },
      {
        id: 2,
        date: 1596284100,
        author: 'user',
        title: 'Et ligula...',
        text: 'Et ligula ullamcorper malesuada proin libero nunc. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pharetra vel turpis nunc eget. Massa id neque aliquam vestibulum morbi blandit. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Et odio pellentesque diam volutpat commodo sed. Consectetur adipiscing elit ut aliquam purus. Semper viverra nam libero justo laoreet sit. Amet tellus cras adipiscing enim eu. Pellentesque adipiscing commodo elit at. Nunc consequat interdum varius sit amet mattis vulputate enim. Fringilla phasellus faucibus scelerisque eleifend donec. Congue quisque egestas diam in arcu cursus euismod quis viverra. Pulvinar mattis nunc sed blandit libero volutpat sed. Volutpat consequat mauris nunc congue nisi. Pulvinar sapien et ligula ullamcorper.'
      },
      {
        id: 3,
        date: 1596285000,
        author: 'admin',
        title: 'In massa tempor...',
        text: 'In massa tempor nec feugiat nisl pretium. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tristique magna sit amet purus gravida quis blandit turpis. Massa vitae tortor condimentum lacinia quis vel eros. Et odio pellentesque diam volutpat commodo sed. Lectus sit amet est placerat in egestas. Lobortis elementum nibh tellus molestie nunc non blandit massa. Ultricies mi quis hendrerit dolor magna. Consectetur a erat nam at lectus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Quis viverra nibh cras pulvinar mattis nunc. Eget duis at tellus at. In dictum non consectetur a erat nam. Dolor magna eget est lorem ipsum dolor sit amet. Ut porttitor leo a diam.'
      },
      {
        id: 4,
        date: 1596285900,
        author: 'user',
        title: 'Ut aliquan purus...',
        text: 'Ut aliquam purus sit amet luctus venenatis lectus. Et malesuada fames ac turpis egestas integer eget aliquet. Aliquam etiam erat velit scelerisque in. Faucibus nisl tincidunt eget nullam non nisi est sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Congue nisi vitae suscipit tellus mauris. Et magnis dis parturient montes. Dictum sit amet justo donec enim diam vulputate ut. Augue lacus viverra vitae congue eu.'
      },
      {
        id: 5,
        date: 1596286800,
        author: 'admin',
        title: 'Arcu odio...',
        text: 'Arcu odio ut sem nulla pharetra diam sit amet nisl. Lacus laoreet non curabitur gravida arcu ac tortor. Amet est placerat in egestas erat. Ut eu sem integer vitae justo. Mattis enim ut tellus elementum. Amet mattis vulputate enim nulla. Mollis nunc sed id semper risus in hendrerit gravida. Ornare quam viverra orci sagittis eu volutpat odio. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ut eu sem integer vitae. Viverra suspendisse potenti nullam ac tortor vitae purus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Tempor id eu nisl nunc mi ipsum. Porta nibh venenatis cras sed felis eget.'
      }
    ],
    users: [
      {
        username: 'admin',
        password: '12345'
      },
      {
        username: 'user',
        password: '12345'
      }
    ]
  },
  mutations: {
    setAuth: (state, data) => {
      state.auth = data;
      localStorage.setItem('auth', JSON.stringify(data));
    },
    unsetAuth: state => {
      state.auth = null;
      localStorage.removeItem('auth');
    },
    addPost: (state, data) => {
      state.posts.unshift(data);
    }
  },
  actions: {
    login: ({ state, commit }, data) => {
      let user = state.users.find(user => user.username == data.username);

      if (user) {
        if (user.password == data.password) {
          commit('setAuth', data);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    getPosts: ({ state }, { offset, count }) => {
      if (offset < state.posts.length) {
        let tempList = [];
        count = offset + count > state.posts.length ? state.posts.length - offset : count;

        for (let i = offset; i - offset < count; i++) {
          tempList.push(state.posts[i]);
        }

        return tempList;
      } else {
        return false;
      }
    },
    createPost: ({ commit }, data) => {
      commit('addPost', data);
      return data;
    }
  }
})
