<template>
  <div class="version-container">
      <div class="version-menu">
        <h2 class="version-name">{{ title }}
          <button type="button" class="md-button md-icon-button hide-button md-theme-default" v-if="!seen" v-on:click="seen = !seen">
            <md-icon>keyboard_arrow_up</md-icon>
          </button>
          <button type="button" class="md-button md-icon-button hide-button md-theme-default" v-if="seen" v-on:click="seen = !seen">
            <md-icon>keyboard_arrow_down</md-icon>
          </button>
        </h2>
      </div>
      <div class="version-content" v-if="seen">
        <md-layout md-gutter>
          <md-layout md-row v-for="epic in epics">
            <cards
                    v-bind:issues="issues"
                    v-bind:versions="versions"
                    v-bind:version="version"
                    v-bind:epic="epic">
            </cards>
          </md-layout>
        </md-layout>
      </div>
    </div>
</template>

<script>
import Cards from 'components/Cards';

export default {
  components: { Cards },
  data() {
    return {
      title: this.version ? this.version.name : 'Unschedule',
      seen: true,
      counter: 0,
    };
  },
  props: ['versions', 'version', 'issues', 'epics'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .version-name {
    border-bottom: 1px solid;
    padding: 16px
  }
  .hide-button {
    float: right;
    top: -10px;
  }
</style>
