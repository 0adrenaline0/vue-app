<template lang="pug">
  #post
    h3#title {{ post.title }}
    p#text {{ post.text }}
    #info
      span {{ post.author }}
      span {{ new Date(post.date * 1000).toGMTString().slice(4,-7) }}
</template>

<script>
  export default {
    name: 'post',
    props: ['post']
  }
</script>

<style lang="sass" scoped>
  #post
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.1);

    #text
      margin: 0.2rem 0;
      padding: 1rem 0;
      border: 1px solid rgba(0,0,0,0.3);
      border-width: 1px 0;

    #info
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: stretch;
</style>