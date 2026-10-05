import { createRouter, createWebHistory } from 'vue-router'
// 三個路由的位置
// /cities
// /cities/:city
// /cities/:city/spots/:id
import CitiesView from '@/views/CitiesView.vue'
import CityView from '@/views/CityView.vue'
import SpotDetailView from '@/views/SpotDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/cities'
    },
    {
      path: '/cities',
      name: 'cities',
      component: CitiesView
    },
    {
      path: '/cities/:city',
      name: 'city',
      component: CityView
    },
    {
      path: '/cities/:city/spots/:id',
      name: 'spot-detail',
      component: SpotDetailView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/cities'
    }
  ]
})

export default router
