<template>
  <main id="content">
    <img id="logo" src="../assets/logo.svg" />
    <form
      @submit.prevent
      @keydown="isError(false)"
    >
      <input
        v-model.trim="username"
        type="username"
        placeholder="username"
        :class="{ errorForm: error }"
      />
      <input
        v-model.trim="password"
        type="password"
        placeholder="password"
        minlength="5"
        :class="{ errorForm: error }"
      />
      <button
        type="submit"
        tabindex="-1"
        :disabled="!username || !password"
        @click="login"
      >Log in</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    login() {
      this.$store.dispatch('login', {
        'username': this.username,
        'password': this.password
      })
        .then((event) => event ? this.$router.push('/') : this.isError(true));
    },
    isError(e) {
      this.error = e;
    }
  }
}
</script>

<style lang="scss" scoped>
#logo {
  width: 15rem;
  margin-bottom: 4rem;
}
.errorForm {
  border: 1px solid red;
  transition: 0.1s;
}
</style>