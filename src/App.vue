<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Expresso</h2>

      <h4 v-if="$route.params.id">Dashboard Id: {{$route.params.id}}</h4>
      <md-button class="md-icon-button">
        <md-icon>local_cafe</md-icon>
      </md-button>
      <router-link v-if='!loggedIn' to="/login">Login</router-link>
      <a v-if='loggedIn' @click.native="onLogout">Logout</a>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Expresso in your Mouth</h3>
        </div>
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span>
              <router-link to="/">Home</router-link>
            </span>
          </md-list-item>

          <md-list-item v-for="item in navItems">
            <md-icon>dashboard</md-icon>
            <span>
              <router-link :to="{ path: `dashboard/${item.id}` }">{{item.name}}</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>pan_tool</md-icon>
            <span>
              <router-link to="/about">About</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import EventBus from './event-bus';

export default {
  name: 'app',
  created() {
    EventBus.$on('user-logged-in', () => {
      this.onLogin();
    });

    this.token = JSON.parse(this.localStorage.get('auth-token'));
    if (this.token) {
      Vue.http.headers.common.Authorization = `Basic ${this.token}`;
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    fetchBoards() {
      const filter = 'projectKeyOrId=ESMT';
      const url = `/agile/1.0/board?${filter}`;
      this.$http.get(url).then((res) => {
        this.navItems = res.body.values;
      });
    },
    onLogin() {
      this.loggedIn = true;
      this.fetchBoards();
    },
    onLogout() {
      this.loggedIn = false;
      this.$localStorage.remove('auth-token');
      this.$router.push('/login');
    },
  },
  data() {
    return {
      navItems: [],
      loggedIn: false,
    };
  },
};
</script>

<style>
.brand {
  max-width: 120px;
}
</style>
