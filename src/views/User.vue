<template>
  <main id="content">
      <h1>User Page</h1>
      <table id="userTable" border="1">
        <tr v-for="(value, name) in userData" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
  </main>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'User',
    data: () => ({
      userData: {}
    }),
    computed: {
      ...mapState(['auth']),
      ...mapGetters({
        getUserData: 'users/getUserData'
      })
    },
    created() {
      this.userData = { 'username': this.auth, ...this.getUserData(this.auth) };
    }
  }
</script>

<style scoped>
  #content {
    flex-direction: column;
  }
</style>