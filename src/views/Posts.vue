<template lang="pug">
  main#content
    h1 Posts
    form(
      v-if="auth"
      @submit.prevent="createPost"
      @keydown="$validator._paused = false"
    )
      input(
        v-model.trim="postTitle"
        v-validate="'required|min:5|max:64'"
        placeholder="Title"
        name="title"
        type="text"
      )
      textarea(
        v-model.trim="postText"
        v-validate="'required|min:150|max:1000'"
        placeholder="Add your text..."
        name="text"
        type="text"
        wrap="soft"
        rows="14"
      )
      button(
        type="submit"
      ) Create Post
    ul(v-if="errors.items")
      li.error(v-for="error in errors.items") {{ error.msg }}
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
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch('createPost', {
            id: this.posts.length + 1,
            date: ~~(new Date().getTime() / 1000),
            author: this.auth.username,
            title: this.postTitle,
            text: this.postText,
          })
            .then(data => this.posts.unshift(data));
          this.$validator._paused = true;
          this.postTitle = '';
          this.postText = '';
        }
      });
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
  width: 640px

  form
    margin: 2rem 0 1rem 0
</style>