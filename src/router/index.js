import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apply from '@/components/Apply'
import Privacy from '@/components/Privacy'
import NotFound from '@/components/NotFound'
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
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Stripe
    },
    {
      path:'*',
      name: '404',
      component: NotFound
    }
  ]
})
