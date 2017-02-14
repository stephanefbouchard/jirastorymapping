import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'components/home';
import Dashboard from 'components/dashboard';
import Login from 'components/login';
import About from 'components/About';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard/:id', name: 'Dashboard', component: Dashboard, props: true },
  { path: '/about', name: 'About', component: About },
  { path: '/home', name: 'Home', component: Home },
];

export default new VueRouter({ routes });
