<template lang="pug">
  main#content
    h1 {{ username }}
    #list
      Post(
        v-for="post in posts"
        v-if="post.author == username"
        :key="`post${post.id}`"
        :post="post"
      )
    Preloader(v-if="!posts.length")
    button(
      v-if="posts.length"
      @click="updatePosts"
    ) Show more posts
</template>

<script>
import Preloader from '@/components/Preloader';
import Post from '@/components/Post';

export default {
  name: 'User',
  data: () => ({
    posts: [],
    username: ''
  }),
  components: {
    Preloader,
    Post
  },
  methods: {
    updatePosts() {
      this.$store.dispatch('getPosts', { offset: this.posts.length, count: 2 })
        .then(data => (this.posts = data ? this.posts.concat(data) : this.posts));
    }
  },
  created() {
    this.username = this.$route.params.username;
    this.updatePosts();
  }
}
</script>

<style lang="sass" scoped>
#content
  width: 640px
</style>