<template>
  <div id="app">
    <Navigation />
    <div id="wrap">
      <keep-alive include="Posts,User">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
#wrap {
  margin: 2.4rem auto 0 auto;
}
</style>