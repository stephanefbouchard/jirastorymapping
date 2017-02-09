import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home';
import Dashboard from 'components/dashboard';
import About from 'components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
