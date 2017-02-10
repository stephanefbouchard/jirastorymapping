<template>
  <md-layout md-column>
    <card v-for="card in filter()"
          v-bind:model="card"
          v-bind:versions="versions">
    </card>
  </md-layout>
</template>

<script>
import Card from 'components/Card';

export default {
  components: { Card },
  methods: {
    filter() {
      let cards = [];
      if (this.issues) {
        if (this.epic && this.version) {
          cards = this.filterByEpicAndVersion();
        } else {
          cards = this.withoutVersion();
        }
      }
      return cards;
    },
    filterByEpicAndVersion() {
      return this.issues.filter(
              card => (card.fields.fixVersions.find(
              fixVersion => (parseInt(fixVersion.id, 10) === this.version.id &&
              card.fields.epic.id === this.epic.id))
      ));
    },
    withoutVersion() {
      return this.issues.filter(
                      card => (card.fields.epic.id === this.epic.id
              && card.fields.fixVersions.length === 0));
    },
  },
  props: ['issues', 'versions', 'version', 'epic'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .epic {
    border-bottom: 1px solid;
    margin: 16px;
    height: 150px;
  }
</style>
