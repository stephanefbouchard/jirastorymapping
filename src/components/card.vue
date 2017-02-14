<template>
  <md-layout md-row>
    <md-card class="card">
      <md-card-header>
        <div>{{ title }}</div>
      </md-card-header>
      <md-card-actions>
        <md-menu class="move-to-menu" md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>playlist_add</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item v-for="version in versions" @click.native="changeVersion(version)">
              <md-icon>input</md-icon>
              <span>{{ version.name }}</span>
            </md-menu-item>
            <md-menu-item @click.native="changeVersion()">
              <md-icon>input</md-icon>
              <span>Unschedule</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-actions>
    </md-card>
  </md-layout>

</template>

<script>
import EventBus from 'event-bus';

export default {
  methods: {
    changeVersion(version) {
      EventBus.$emit('apply-version-to-card', {
        version,
        card: this.model,
      });
    },
  },
  data() {
    return {
      title: this.model.fields.summary,
    };
  },
  props: ['model', 'versions'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 16px;
    height: 150px;
  }
  .move-to-menu {
    float: right;
  }
</style>
