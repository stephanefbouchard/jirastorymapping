import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from 'components/dashboard';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

Vue.http.headers.common.Authorization = 'Basic c3RlcGhhbmUuZm9ydGluYm91Y2hhcmQ6UG9rZXB1Y2UxIQ==';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
