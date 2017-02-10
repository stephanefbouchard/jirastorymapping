<template>
  <md-layout md-row>
    <md-card class="card">
      <md-card-header>
        <md-menu class="move-to-menu" md-size="3">
          <md-button md-menu-trigger class="story-point md-icon-button md-raised md-mini">
            {{ storyPoint }}
          </md-button>
          <md-menu-content>
            <md-menu-item v-for="item in fibo" @click.native="changeStoryPoint(item)">
              <span>{{ item }}</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
        <div>{{ title }}</div>
      </md-card-header>
      <md-card-actions>
        <md-menu class="move-to-menu" md-size="3">
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
        issue: this.model,
        version,
      });
    },
    changeStoryPoint(point) {
      EventBus.$emit('apply-story-point-to-card', {
        issue: this.model,
        point,
      });
    },
  },
  data() {
    return {
      fibo: [1, 2, 3, 5, 8, 13, 21, 34, 40],
      title: this.model.fields.summary,
    };
  },
  computed: {
    storyPoint() {
      return this.model.fields.customfield_10013 || '-';
    },
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
  .story-point-container {
    width: initial;
    float: right;
    top: -10px;
    right: -10px;
  }
  .story-point {
    float: right;
    top: -10px;
    right: -10px;
  }
</style>
