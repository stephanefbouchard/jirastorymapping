<template>
  <div class="phone-viewport">
    <router-link to="/dashboard">Go to Dashboard</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get('/api/2/issue/DS-12906').then((data) => {
        this.data = data;
      }, (err) => {
        this.data = err;
      });
    },
  },
};
</script>

<style scoped>

</style>
