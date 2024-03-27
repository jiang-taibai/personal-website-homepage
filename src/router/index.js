import { createRouter, createWebHashHistory } from 'vue-router'
const HomePageView = () => import('@/views/HomePageView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
