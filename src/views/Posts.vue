<template>
  <main id="content">
    <h1>Posts</h1>
    <div id="list">
      <div id="post" v-for="post in posts" :key="post.id">
        <h3 id="title">{{ post.title }}</h3>
        <p id="text">{{ post.text }}</p>
        <div id="info">
          <span>{{ post.author }}</span>
          <span>{{ new Date(post.date * 1000).toGMTString().slice(4,-7) }}</span>
        </div>
      </div>
      <button @click="updateList">Show more posts</button>
    </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Posts',
    data: () => ({
      posts: []
    }),
    computed: mapGetters({ getPosts: 'posts/getPosts' }),
    methods: {
      updateList() {
        let data = this.getPosts({ offset: this.posts.length, count: 2 });
        this.posts = data ? this.posts.concat(data) : this.posts;
      }
    },
    created() {
      this.updateList();
    },
  }
</script>

<style lang="scss" scoped>
  #content {
    flex-direction: column;

    #list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;

      #post {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        margin: 1rem 0;
        padding: 1rem;
        border: 1px solid rgba(0,0,0,0.1);

        #text {
          margin: 0.2rem 0;
          padding: 1rem 0;
          border: 1px solid rgba(0,0,0,0.3);
          border-width: 1px 0;
        }

        #info {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: stretch;
        }
      }
    }
  }
</style>