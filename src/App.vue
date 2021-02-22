<template lang="pug">
  #app
    Navigation
    #wrap
      keep-alive(include="Posts,User")
        router-view
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

<style lang="sass">
#app
  display: flex
  flex-direction: column

#wrap
  margin: 2.4rem auto 0 auto
</style>