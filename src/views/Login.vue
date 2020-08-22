<template>
  <main id="content">
    <img id="logo" src="../assets/logo.svg" />
    <form @submit.prevent>
      <input
        v-model.trim="username"
        type="username"
        placeholder="username"
        :class="{ danger: error }"
      />
      <input
        v-model.trim="password"
        type="password"
        placeholder="password"
        minlength="5"
        :class="{ danger: error }"
      />
      <button
        type="submit"
        tabindex="-1"
        @click="auth"
      >Log in</button>
    </form>
  </main>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'Login',
    data: () => ({
      username: '',
      password: '',
      error: false
    }),
    computed: mapGetters({ getUserData: 'users/getUserData' }),
    methods: {
      ...mapMutations(['loginUser']),
      auth() {
        let user = this.getUserData(this.username);
        if (user && this.password === user.password) {
          this.loginUser(this.username);
          this.$router.push({ name: 'home' });
        } else {
          this.showError();
        }
      },
      showError() {
        this.error = true;
        setTimeout(() => (this.error = false), 500);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    flex-direction: column;

    #logo {
      width: 15rem;
      margin-bottom: 4rem;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        height: 2rem;
        margin-bottom: 0.4rem;
        padding: 0.2rem;
      }
    }
  }
  .danger {
    animation: 0.15s error ease 3;
    @keyframes error {
      0%, 50% { transform: translateX(-5px); }
      75%, 100% { transform: translateX(5px); }
    }
  }
</style>