import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Letter',
    name: 'Letter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "letter" */ '../views/Letter.vue')
    }
  }, 
  {
    path: '/Board',
    name: 'Board',
    component: () => { return import(/* webpackChunkName: "board" */ '@/views/Board.vue')}
  },
  {
    path: '/Meetings',
    name: 'Meetings',
    component: () => { return import(/* webpackChunkName: "meetings" */ '@/views/Meetings.vue')}
  },
  {
    path: '/SignLetter',
    name: 'Sign',
    component: () => { return import(/* webpackChunkName: "sign" */ '@/views/SignLetter')}
  },
  {
    path: '/SignLetter/:id',
    name: 'SignID',
    component: () => { return import(/* webpackChunkName: "sign" */ '@/views/SignLetter')}
  },
  {
    path: '/PublicEducation',
    name: 'PUB',
    component: () => { return import(/* webpackChunkName: "pub" */ '@/views/PublicEducation')}
  },
  {
    path: '/ContactList',
    name: 'Contact',
    component: () => { return import(/* webpackChunkName: "contact" */ '@/views/ContactList')}
  },
  {
    path: '/WhoWeAre',
    name: 'WhoWeAre',
    component: () => { return import(/* webpackChunkName: "weare" */ '@/views/WhoWeAre')}
  },
  {
    path: '/ReachUs',
    name: 'ReachUs',
    component: () => { return import(/* webpackChunkName: "reach" */ '@/views/ReachUs')}
  },
  {
    path:'/:catchAll(.*)',
    component: () => { return import(/* webpackChunkName: "not" */ '@/views/NotFound')}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }

})

export default router
