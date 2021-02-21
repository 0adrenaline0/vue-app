<template lang="pug">
  header
    nav#navigation
      router-link(to="/" exact) Home
      router-link(to="/posts") Posts
      router-link(
        v-if="auth"
        :to="{ name: 'user', params: { 'username': auth.username } }"
      ) User
      router-link(v-if="!auth" to="/login") Login
      router-link(v-if="auth" to="/unlogin") Unlogin
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'navigation-bar',
    computed: mapState({
      auth: state => state.auth
    })
  }
</script>

<style lang="sass" scoped>
  header
    width: 100vw;
    position: fixed;
    padding: 0.6rem 0;
    opacity: 0.9;
    background: #fff;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(0,0,0,0.2);

  #navigation
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    column-gap: 1rem;

  #navigation > a
    padding: 0 1rem;

  .router-link-active
    outline: auto;
    outline-offset: 2px;
</style>