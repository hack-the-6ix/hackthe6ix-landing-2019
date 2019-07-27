import Vue from 'vue';
import VueRouter from 'vue-router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import {routes} from '@pages';
import './icons';

Vue.use(VueRouter);
Vue.component('icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  scrollBehavior({hash}) {
    let top = 0;
    if (hash && hash !== '#') {
      top = document.querySelector(hash).offsetTop - 120;
    }
    return window.scrollTo({top, behavior: 'smooth'});
  },
  routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
