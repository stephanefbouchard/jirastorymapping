<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Expresso, the story mapping tool</h2>

      <md-button class="md-icon-button">
        <md-icon>local_cafe</md-icon>
      </md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
