import echarts from 'echarts'
import DatePicker from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import md5 from 'js-md5'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$md5 = md5

Vue.use(DatePicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')