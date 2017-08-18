import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Admin from '@/components/Admin'
import Hello from '@/components/Hello'
import Apply from '@/components/Apply'
import Liability from '@/components/Liability'
import Privacy from '@/components/Privacy'
import Status from '@/components/Status'
import Thanks from '@/components/Thanks'
import NotFound from '@/components/NotFound'
import Stripe from '@/components/Stripe'

Vue.use(Router)
export default new Router({
  hashbang: false,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/',
      component: Main,
      children: [
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
          path: '/status/:id',
          name: 'Status',
          component: Status
        },
        {
          path: '/sponsor',
          name: 'Sponsor',
          component: Stripe
        },
        {
          path:'/thanks',
          name: 'Thanks',
          component: Thanks
        },
        {
          path:'/liability',
          name: 'Liability',
          component: Liability
        },
        {
          path:'*',
          name: '404',
          component: NotFound
        }
      ]
    }
  ]
})
