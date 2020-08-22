<template>
  <div id="app">
    <Navigation />
    <div id="wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>
  #wrap {
    max-width: 640px;
    margin: 2.4rem auto 0 auto;
  }
  #app {
    display: flex;
    flex-direction: column;
  }
</style>