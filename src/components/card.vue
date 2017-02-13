<template>
  <md-card class="card">
    <mp-card-header>
      <div>{{ title }}</div>
    </mp-card-header>
  </md-card>
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
  }
</style>
