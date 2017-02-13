<template>
  <md-layout md-column>
      <md-card class="epic">
        <md-card-header>
          <div>{{ title }}</div>
          <md-chip>Epic</md-chip>
        </md-card-header>
      </md-card>
  </md-layout>

    <!--<md-layout md-column v-for="version in versions">-->
      <!--<md-layout md-row>-->
          <!--<h3>{{ version.name }}</h3>-->
      <!--</md-layout>-->
           <!--<card v-for="card in filterByVersion(version)"-->
                 <!--v-bind:model="card">-->
            <!--</card>-->
    <!--</md-layout>-->
    <!--<md-layout md-flex>-->
      <!--<h3>Unschedule</h3>-->
      <!--<card v-for="card in whitoutVersions(version)"-->
            <!--v-bind:model="card">-->
      <!--</card>-->
    <!--</md-layout>-->
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
    border-bottom: 1px solid;
    margin: 16px;
    height: 150px;
  }
</style>
