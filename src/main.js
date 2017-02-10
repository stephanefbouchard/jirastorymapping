// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Resource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueDragula from 'vue-dragula';
import VueLocalStorage from 'vue-localstorage';
import 'vue-material/dist/vue-material.css';
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

// Component registering
Vue.component('Epics', require('./components/Epics.vue'));
Vue.component('Cards', require('./components/Cards.vue'));
Vue.component('Card', require('./components/Card.vue'));
Vue.component('Version', require('./components/Version.vue'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
