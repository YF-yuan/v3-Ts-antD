import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import {getStorage} from 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 全局路由前置导航守卫
router.beforeEach((to, form, next)=> {
  const token = getStorage(localStorage, 'token')
})

export default router
