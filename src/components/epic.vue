<template>
  <md-layout md-column>
      <md-card class="epic">
        <md-card-header>
          <div class="md-title">{{ title }}</div>
          <md-chip>Epic</md-chip>
        </md-card-header>
      </md-card>
      <card v-for="card in cards"
            v-bind:model="card">
      </card>
  </md-layout>
</template>

<script>
export default {
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const url = `/agile/1.0/board/609/epic/${this.model.id}/issue`;
      this.$http.get(url).then((data) => {
        this.cards = data.body.issues;
      }, (err) => {
        this.data = err;
      });
    },
  },
  data() {
    return {
      title: this.model.summary,
      cards: this.cards,
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
