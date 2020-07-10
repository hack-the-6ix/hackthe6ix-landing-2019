import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import {Vue as VueIntegration} from '@sentry/integrations';
import PortalVue from 'portal-vue';
import VueRouter from 'vue-router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import {routes} from '@pages';
import './icons';

Sentry.init({
  dsn:
    'https://f92b29c910ce42189733ccdb2600dff2@o418830.ingest.sentry.io/5324513',
  integrations: [new VueIntegration({Vue, attachProps: true})],
});

Vue.use(PortalVue);
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
