<template>
  <div class="login-form">
      <form novalidate>
        <h2>Login</h2>
        <md-input-container>
          <label>Username</label>
          <md-input v-model="credentials.username"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input v-model="credentials.password" type="password"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary" type="submit" @click.native="doLogin">
          Login
        </md-button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const credentials = this.$localStorage.get('credentials');
      if (credentials) {
        this.credentials = credentials;
        this.doLogin();
      }
    },
    doLogin() {
      const token = btoa(`${this.credentials.username}:${this.credentials.password}`);
      this.$http.headers.common.Authorization = `Basic ${token}`;

      this.$http.get('/api/2/issue/createmeta').then(() => {
        this.$localStorage.set('credentials', this.credentials);
      }, () => {
        console.log('error');
      });
    },
  },
};
</script>

<style scoped>
  .login-form {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }
</style>
