<template>
  <div>
    <md-layout md-gutter>
      <h1 class="board-name">ESMT BOARD : User Journey</h1>
    </md-layout>
    <md-layout md-gutter>
        <epics
          v-for="epic in epics"
          v-bind:model="epic">
        </epics>
    </md-layout>
    <version v-for="version in versions"
        v-bind:issues="issues"
        v-bind:versions="versions"
        v-bind:version="version"
        v-bind:epics="epics">
    </version>
    <version
       v-bind:issues="issues"
       v-bind:epics="epics"
       v-bind:versions="versions">
    </version>
  </div>
</template>

<script>
import Epics from 'components/Epics';
import Version from 'components/Version';

import EventBus from 'event-bus';

export default {
  components: { Epics, Version },
  created() {
    this.fetchData();
    EventBus.$on('apply-version-to-card', (data) => {
      this.updateIssue(data.issue, {
        fixVersions: [{
          id: `${data.version.id}`,
        }],
      });
    });
    EventBus.$on('apply-story-point-to-card', (data) => {
      this.updateIssue(data.issue, {
        customfield_10013: data.point,
      });
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
    updateIssue(issue, data) {
      const issue2 = issue;
      this.$http.put(`api/2/issue/${issue.key}`, {
        fields: data,
      }).then(() => {
        Object.assign(issue2.fields, data);
      });
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

<style scoped>
  .board-name {
    padding: 15px;
  }
  .version-name {
    border-bottom: 1px solid;
    padding: 1px
  }
</style>
