<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{ data }}</h4>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Expresso, the story mapping tool.',
      data: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http
        .get('/api/2/issue/DS-12906').then((data) => {
          this.data = data;
        }, (err) => {
          this.data = err;
        });
    },
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
