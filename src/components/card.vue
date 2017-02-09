<template>
    <md-card class="card">
      <card-header>
        <div class="md-title">{{ title }}</div>
      </card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>

      <md-card-content>
        {{ description }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.model.title,
      description: this.model.description,
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
