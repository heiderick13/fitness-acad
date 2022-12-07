import { createRouter, createWebHistory } from 'vue-router'
import NossoPlanos from '../views/NossoPlanos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NossoPlanos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Quemsomos.vue')
    },
    {
      path: '/user/add',
      name: 'user-add',
      component: () => import('../views/UserAdd.vue')
    },
    {
      path: '/Esporte/Esporte',
      name: 'Esporte-Esporte',
      component: () => import('../views/Esportes.vue')
    }
  ]
})

export default router
