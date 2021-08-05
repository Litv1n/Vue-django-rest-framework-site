import { createRouter, createWebHistory } from 'vue-router'

const routes = [
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
  ]
})

export default router
