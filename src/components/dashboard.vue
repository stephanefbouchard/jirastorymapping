<template>
  <div>

    <h5>Dashboard Id: {{$route.params.id}}</h5>

    <md-layout md-gutter>
        <epics v-for="epic in epics"
          v-bind:model="epic"
        >
        </epics>
    </md-layout>
    <version v-for="version in versions"
        v-bind:issues="issues"
        v-bind:versions="versions"
        v-bind:version="version"
        v-bind:epics="epics">
    </version>
    <version v-bind:issues="issues"
       v-bind:epics="epics">
    </version>
  </div>
</template>

<script>
import EventBus from 'event-bus';

export default {
  created() {
    this.fetchData();
    EventBus.$on('apply-version-to-card', (data) => {
      this.applyVersionToCard(data.version, data.card);
    });
  },
  methods: {
    fetchData() {
      this.$http.get(`agile/1.0/board/${this.id}/sprint`).then((data) => {
        this.sprints = data.body.values;
      });
      this.$http.get(`/agile/1.0/board/${this.id}/issue?maxResults=1000`).then((data) => {
        this.issues = data.body.issues;
      });
      this.$http.get(`agile/1.0/board/${this.id}/version`).then((data) => {
        this.versions = data.body.values;
      });
      this.$http.get(`/agile/1.0/board/${this.id}/epic`).then((data) => {
        this.epics = data.body.values;
      });
    },
    applyVersionToCard(version, card) {
      console.log(version, card);
      debugger;
    },
  },
  data() {
    return {
      sprints: this.sprints,
      versions: this.versions,
      epics: this.epics,
      issues: this.issues,
    };
  },
  props: ['id'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .version-name {
    border-bottom: 1px solid;
    padding: 16px
  }
</style>
