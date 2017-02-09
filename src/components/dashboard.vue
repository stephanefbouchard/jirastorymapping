<template>
  <div class="hello">

    <md-layout md-gutter>
      <md-layout md-column md-gutter>
        <md-layout>
          <card v-for="card in cards"
          v-bind:model="card">
          </card>
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
  name: 'hello',
  data() {
    return {
      msg: 'My Fist Dashboard',
      cards: [
        { title: 'A user chill 1', description: 'meh its super boring' },
        { title: 'A user chill 2', description: 'meh its super boring' },
        { title: 'A user chill 3', description: 'meh its super boring' },
        { title: 'A user chill 4', description: 'meh its super boring' },
      ],
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
