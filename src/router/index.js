import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'components/home';
import Dashboard from 'components/dashboard';
import About from 'components/About';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard/:id', name: 'Dashboard', component: Dashboard, props: true },
  { path: '/about', name: 'About', component: About },
];

export default new VueRouter({ routes });
