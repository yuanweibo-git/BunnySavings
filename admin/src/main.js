import echarts from 'echarts'
import DatePicker from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import md5 from 'js-md5'

import { Icon } from 'ant-design-vue'

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2668529_sg6j5ksgf1f.js'
})

function plugins(Vue) {
  Vue.component('my-icon', MyIcon)
}

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$md5 = md5

Vue.use(plugins)
Vue.use(DatePicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
