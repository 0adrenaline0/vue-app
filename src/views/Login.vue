<template lang="pug">
  main#content
    img#logo(src="../assets/logo.svg")
    form(
      @submit.prevent
      @keydown="wrongData(false)"
    )
      input(
        v-model.trim="$v.username.$model"
        type="username"
        placeholder="Username"
        :class="{ errorField: $v.username.$error }"
      )
      input(
        v-model.trim="$v.password.$model"
        type="password"
        placeholder="Password"
        :class="{ errorField: $v.password.$error }"
      )
      button(
        type="submit"
        tabindex="-1"
        @click="login"
      ) Log in
    ul(v-if="$v.username.$error")
      li.error(v-if="!$v.username.required") Username is required
      li.error(v-if="!$v.username.minLength").
        Username must have at least {{ $v.username.$params.minLength.min }} letters
    ul(v-if="$v.password.$error")
      li.error(v-if="!$v.password.required") Password is required
      li.error(v-if="!$v.password.minLength").
        Password must have at least {{ $v.password.$params.minLength.min }} letters
    .error(v-if="wrong") Username or password is incorrect!
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    wrong: false
  }),
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    login() {
      if (!this.$v.username.$error && !this.$v.password.$error) {
        this.$store.dispatch('login', {
          'username': this.username,
          'password': this.password
        })
          .then(event => event ? this.$router.push('/') : this.wrongData(true));
      }
    },
    wrongData(e) {
      this.wrong = e ? true : false;
    }
  }
}
</script>

<style lang="sass" scoped>
#logo
  width: 15rem;
  margin-bottom: 4rem;

form
  margin-bottom: 1rem;

.errorField
  border: 1px solid red;
  transition: 0.1s;

.error
  color: red;
  font-size: 14px;
  margin: 0 1rem;
</style>