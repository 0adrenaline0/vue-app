<template>
  <main id="content">
    <h1>{{ this.username }}</h1>
    <div id="list">
      <Post
        v-for="post in posts"
        :key="`post${post.id}`"
        :post="post"
      />
    </div>
    <Preloader v-if="!posts.length" />
    <button
      v-if="posts.length"
      @click="updatePosts"
    >Show more posts</button>
  </main>
</template>

<script>
import Preloader from '@/components/Preloader'
import Post from '@/components/Post'

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
      this.$store.dispatch('getPosts', { offset: this.posts.length, count: 2, author: this.username })
        .then(data => (this.posts = data ? this.posts.concat(data) : this.posts));
    }
  },
  created() {
    this.username = this.$route.params.username;
    this.updatePosts();
  }
}
</script>

<style scoped>
#content {
  width: 640px;
}
</style>