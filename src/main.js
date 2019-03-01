import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './pages';

Vue.use(VueRouter);
Vue.config.productionTip = false;

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
