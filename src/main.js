import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from '@pages';

Vue.use(VueRouter);
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
