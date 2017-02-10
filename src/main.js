// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import Resource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueDragula from 'vue-dragula';
import VueLocalStorage from 'vue-localstorage';
import App from './App';
import router from './router';

Vue.use(Resource);
Vue.use(VueMaterial);
Vue.use(VueDragula);
Vue.use(VueLocalStorage);

Vue.material.registerTheme('default', {
  primary: 'brown',
  accent: 'black',
  warn: 'red',
  background: 'white',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
