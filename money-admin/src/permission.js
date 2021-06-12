import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import { routes } from '@/router'

import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']

router.beforeEach(async(to, from, next) => {
  NProgress.start() // 开启动画

  const found = routes.find(({ path }) => path === to.path)

  if (!found) {
    next('/404')
  }

  if (store.getters.token) {
    to.path === '/login' ? next('/') : next()
  } else {
    whiteList.indexOf(to.path) > -1 ? next() : next('/login')
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
