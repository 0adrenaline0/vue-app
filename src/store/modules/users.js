export default {
  namespaced: true,
  state: () => ([
    {
      username: 'user',
      password: '12345'
    }
  ]),
  getters: {
    getUserData: state => username => {
      let data = state.filter(user => user.username === username);
      return data.length ? data[0] : false;
    }
  }
}