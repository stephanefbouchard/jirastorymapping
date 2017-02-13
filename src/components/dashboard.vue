<template>
  <div class="hello">
      <md-layout md-column md-gutter>
        <md-card>
          <md-card-media>
            <img src="assets/card-image-1.jpg" alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card>
    </md-layout>


    <h4>{{ data }}</h4>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'My Fist Dashboard',
    };
  },
  created() {
  },
  goToDashboard() {

  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
