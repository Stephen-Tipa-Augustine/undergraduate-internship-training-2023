<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login" class="login-form">
      <div>
        <input type="text" name="username" id="" v-model="form.username" placeholder="username">
      </div>
      <div>
        <input type="password" v-model="form.password" placeholder="password">
      </div>
      <div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),
  methods: {
    async login() {
      this.$store.dispatch('login', this.form)
          .then(data => {
            console.log(data)
            this.$router.replace({name: 'home'});
          })
          .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>
.login-form > div {
  margin: 2rem auto;
}

input {
  border: 2px solid green;
  height: 2rem;
  width: 240px;
}
</style>
