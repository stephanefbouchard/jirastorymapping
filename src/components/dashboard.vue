<template>
  <div>

    <h5>Dashboard Id: {{$route.params.id}}</h5>

    <md-layout md-gutter>
        <epics v-for="epic in epics"
          v-bind:model="epic"
        >
        </epics>
    </md-layout>
    <div v-for="version in versions">
      <h2 class="version-name">{{ version.name }}</h2>
      <md-layout md-gutter>
        <md-layout md-row v-for="epic in epics">
          <cards
                  v-bind:issues="issues"
                  v-bind:version="version"
                  v-bind:epic="epic">
          </cards>
        </md-layout>
      </md-layout>
    </div>

    <h2 class="version-name">Unschedule</h2>
    <md-layout md-gutter>
      <md-layout md-row v-for="epic in epics">
        <cards
                v-bind:issues="issues"
                v-bind:epic="epic">
        </cards>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  created() {
    this.boardId = 609;
    this.fetchData();
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
