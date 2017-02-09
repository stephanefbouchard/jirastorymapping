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

          <md-list-item v-for="item in navItems">
            <md-icon>dashboard</md-icon>
            <span>
              <!-- TODO bind url-->
              <router-link to="/">{{item.name}} {{item.self}}</router-link>
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
  created() {
    this.fetchBoards();
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
  },
  data() {
    return {
      navItems: [],
    };
  },
};
</script>

<style>
.brand {
  max-width: 120px;
}
</style>
