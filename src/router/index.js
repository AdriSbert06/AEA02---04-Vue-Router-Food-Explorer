import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealDetail from '@/views/MealDetail.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    {
      path: '/meal/:id',
      name: 'MealDetail',
      component: MealDetail
}
  ],
})

export default router