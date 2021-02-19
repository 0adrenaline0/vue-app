<template>
  <main id="content">
    <h1>{{ auth.username }}</h1>
    <div id="list">
      <Post
        v-for="post in posts"
        v-if="post.author == auth.username"
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
import { mapState } from 'vuex';
import Preloader from '@/components/Preloader';
import Post from '@/components/Post';

export default {
  name: 'User',
  data: () => ({
    posts: []
  }),
  computed: mapState(['auth']),
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
    this.updatePosts();
  }
}
</script>

<style scoped>
#content {
  width: 640px;
}
</style>