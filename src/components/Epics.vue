<template>
  <md-layout md-column>
      <md-card class="epic">
        <md-card-header>
          <md-chip>{{ key }}</md-chip>
          <div class="summary">{{ title }}</div>
        </md-card-header>
      </md-card>
  </md-layout>
</template>

<script>
export default {
  data() {
    return {
      key: this.model.key,
      title: this.model.summary,
    };
  },
  props: ['model'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .epic {
    margin: 16px;
    width: 350px;
    height: 175px;
    border-bottom: 1px solid;
  }
  .summary {
    padding: 16px;
  }
</style>
