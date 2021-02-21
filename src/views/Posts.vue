<template lang="pug">
  main#content
    h1 Posts
    form(v-if="auth" @submit.prevent)
      input(
        v-model.trim="postTitle"
        type="text"
        maxlength="64"
        placeholder="Title"
        required
      )
      textarea(
        v-model.trim="postText"
        maxlength="1000"
        placeholder="Add your text..."
        wrap="soft"
        rows="14"
        required
      )
      button(
        :disabled="!postTitle || !postText"
        @click="createPost"
      ) Create Post
    #list
      Post(
        v-for="post in posts"
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
import { mapState } from 'vuex';
import Preloader from '@/components/Preloader';
import Post from '@/components/Post';

export default {
  name: 'Posts',
  data: () => ({
    posts: [],
    postTitle: '',
    postText: ''
  }),
  computed: mapState(['auth']),
  components: {
    Preloader,
    Post
  },
  methods: {
    createPost() {
      this.$store.dispatch('createPost', {
        id: this.posts.length + 1,
        date: ~~(new Date().getTime() / 1000),
        author: this.auth.username,
        title: this.postTitle,
        text: this.postText,
      })
        .then(data => this.posts.unshift(data));
      this.postTitle = '';
      this.postText = '';
    },
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

<style lang="sass" scoped>
#content
  width: 640px;

form
  margin-top: 2rem;
</style>