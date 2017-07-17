import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Stripe from '@/components/Stripe'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Stripe
    },

  ]
})
