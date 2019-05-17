import Vue from 'vue';
import VueRouter from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import { routes } from '@pages';
import './icons';

Vue.use(VueRouter);
Vue.component('icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
