import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  },
  {
    path: '*',
    name: '404',
    redirect: '/404',
    component: () => import('@/views/404')
  }
]

export const asyncRouter = [
  {
    activa: true,
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      meta: { title: '首页', icon: 'home' }
    }]
  },

  {
    activa: false,
    path: '/test',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      name: 'Test',
      component: () => import('@/views/test'),
      meta: { title: '测试页', icon: 'test' }
    }]
  },

  {
    activa: false,
    path: '/expense',
    component: Layout,
    children: [{
      path: '',
      name: 'expense',
      component: () => import('@/views/expense'),
      meta: { title: '支出记账', icon: 'expense' }
    }]
  },

  {
    activa: false,
    path: '/revenue',
    component: Layout,
    children: [{
      path: '',
      name: 'revenue',
      component: () => import('@/views/revenue'),
      meta: { title: '收入记账', icon: 'revenue' }
    }]
  },

  {
    activa: false,
    path: '/search',
    component: Layout,
    children: [{
      path: '',
      name: 'search',
      component: () => import('@/views/search'),
      meta: { title: '快速查询', icon: 'search' }
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
  base: process.env.VUE_APP_BASE_API,
  routes
})

export default router
