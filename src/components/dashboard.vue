<template>
  <div class="hello">

    <md-layout md-gutter>
      <md-layout md-column md-gutter>
        <md-layout>
          <epic v-for="epic in epics"
          v-bind:model="epic">
          </epic>
        </md-layout>
        <md-layout>

        </md-layout>
      </md-layout>

      <md-layout md-column md-gutter>
        <md-layout md-flex="50"></md-layout>
        <md-layout></md-layout>
        <md-layout></md-layout>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import card from 'components/card';

export default {
  created() {
    this.fetchEpic();
  },
  methods: {
    fetchEpic() {
      this.$http.get('/agile/1.0/board/609/epic').then((data) => {
        this.epics = data.body.values;
      }, (err) => {
        this.data = err;
      });
    },
  },
  data() {
    return {
      epics: this.epics,
    };
  },
  components: {
    'other-component': card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
