import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Login from 'views/Login';
import Home from 'views/Home';
import Dashboard from 'views/Dashboard';
import About from 'views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard/:id',
    name: 'Dashboard',
    component: Dashboard,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default new VueRouter({ routes });
