<template>
  <header>
    <nav id="navigation">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link v-if="auth" :to="{ name: 'user', params: { 'username': auth }}">User</router-link>
      <router-link v-if="!auth" to="/login">Login</router-link>
      <router-link v-if="auth" to="/unlogin">Unlogin</router-link>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Header',
    computed: mapState({
      auth: state => state.auth
    })
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100vw;
    position: fixed;
    padding: 0.6rem 0;
    opacity: 0.9;
    background: #fff;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  #navigation {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  #navigation > a {
    margin: 0 0.5rem;
    padding: 0 1rem;
  }
  a[aria-current] {
    border-style: solid;
    border-width: 0 1px;
    border-radius: 8%;
  }
</style>