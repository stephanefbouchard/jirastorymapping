<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Expresso</h2>

      <md-button class="md-icon-button">
        <md-icon>local_cafe</md-icon>
      </md-button>
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

          <md-list-item>
            <md-icon>dashboard</md-icon>
            <span>
              <router-link to="/dashboard">View my dashboards</router-link>
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
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.brand {
  max-width: 120px;
}
</style>
