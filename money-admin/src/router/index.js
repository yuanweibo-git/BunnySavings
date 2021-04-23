import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: { title: '登录', icon: '404' }
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Dashboard'),
    meta: { title: '404', icon: '404' }
  }
]

export const asyncRouter = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/test',
    component: Layout,
    // hidden: true,
    children: [{
      path: '',
      name: 'Test',
      component: () => import('@/views/test'),
      meta: { title: '测试页', icon: '404' }
    }]
  }

]

export const routes = [
  ...asyncRouter,
  ...constantRoutes
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

export default router
