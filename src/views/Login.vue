<template lang="pug">
  main#content
    img#logo(src="../assets/logo.svg")
    form(
      @submit.prevent="login"
    )
      input(
        v-model.trim="username"
        v-validate="'required|alpha_dash|min:4'"
        name="username"
        type="text"
        placeholder="Username"
        :class="{ 'is-danger': errors.has('username') }"
      )
      input(
        v-model.trim="password"
        v-validate="'required|numeric|min:5'"
        name="password"
        type="password"
        placeholder="Password"
        :class="{ 'is-danger': errors.has('password') }"
      )
      button(
        type="submit"
      ) Log in
    ul(v-if="errors.items")
      li.error(v-for="error in errors.items") {{ error.msg }}
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch('login', {
            'username': this.username,
            'password': this.password
          })
            .then(event => {
              return event ? this.$router.push('/') : alert('Username or password is incorrect!');
            });
        }
      });
    }
  }
}
</script>

<style lang="sass" scoped>
main
  max-width: 240px

  #logo
    width: 15rem
    margin-bottom: 4rem

  form
    margin-bottom: 1rem
</style>