// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Resource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueDragula from 'vue-dragula';
import 'vue-material/dist/vue-material.css';
import App from './App';
import router from './router';

Vue.use(Resource);
Vue.use(VueMaterial);
Vue.use(VueDragula);

Vue.material.registerTheme('default', {
  primary: 'brown',
  accent: 'black',
  warn: 'red',
  background: 'white',
});

Vue.http.headers.common.Authorization = 'Basic c3RlcGhhbmUuZm9ydGluYm91Y2hhcmQ6UG9rZXB1Y2UxIQ==';

// Component registering
Vue.component('epics', require('./components/epics.vue'));
Vue.component('cards', require('./components/cards.vue'));
Vue.component('card', require('./components/card.vue'));
Vue.component('version', require('./components/version.vue'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
