import { createRouter, createWebHistory } from 'vue-router'

const routes = [
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/OurTeam.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/Preview.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/Calculator.vue')
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('../views/First.vue')
    },
    {
      path: '/auto',
      name: 'auto',
      component: () => import('../views/Auto.vue')
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/Drivers.vue')
    },
    {
      path: '/disp',
      name: 'disp',
      component: () => import('../views/Disp.vue')
    },
    {
      path: '/conc',
      name: 'conc',
      component: () => import('../views/Conc.vue')
    },
    {
      path: '/gibc',
      name: 'gibc',
      component: () => import('../views/Gibc.vue')
    },
    {
      path: '/stab',
      name: 'stab',
      component: () => import('../views/Stab.vue')
    },
    {
      path: '/col',
      name: 'col',
      component: () => import('../views/Col.vue')
    },
  ]
})

export default router
