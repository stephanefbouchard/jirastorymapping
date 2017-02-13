<template>
  <md-layout md-row>
    <md-card class="card">
      <md-card-header>
        <div>{{ title }}</div>
      </md-card-header>
    </md-card>
  </md-layout>

</template>

<script>
export default {
  data() {
    return {
      title: this.model.fields.summary,
      // description: this.model.description,
    };
  },
  props: ['model'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 16px;
    height: 150px;
  }
</style>
