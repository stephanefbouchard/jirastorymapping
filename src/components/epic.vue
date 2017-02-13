<template>
  <md-card class="epic">
    <card-header>
      <div class="md-title">{{ title }}</div>
    </card-header>
  </md-card>
</template>

<script>
export default {
  data() {
    return {
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
  }
</style>
