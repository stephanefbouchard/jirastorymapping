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

        <md-button class="md-raised md-primary" type="submit" @click.native="onLoginSubmit">
          Login
        </md-button>
      </form>
  </div>
</template>

<script>
import Vue from 'vue';
import EventBus from 'event-bus';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        token: '',
      },
    };
  },
  methods: {
    onLoginSubmit() {
      this.token = btoa(`${this.credentials.username}:${this.credentials.password}`);
      this.doLogin();
    },
    doLogin() {
      Vue.http.headers.common.Authorization = `Basic ${this.token}`;
      this.$http.get('/api/2/issue/createmeta').then(() => {
        this.$localStorage.set('auth-token', JSON.stringify(this.token));
        this.$router.push('/home');
        EventBus.$emit('user-logged-in');
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
