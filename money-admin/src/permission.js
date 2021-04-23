import router from '@/router'
// import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// const whiteList = ['/login', '/404']

router.beforeEach(async(to, from, next) => {
  NProgress.start() // 开启动画
  // console.log(store.getters.token)
  // if (store.getters.token) {
  //   if (to.path === '/login') {
  //     next('/')
  //   } else {
  // console.log(window.devicePixelRatio)

  next()
  //   }
  // } else {
  //   whiteList.indexOf(to.path) > -1 ? next() : next('/login')
  // }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
