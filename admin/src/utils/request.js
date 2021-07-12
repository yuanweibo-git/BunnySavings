import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

service.interceptors.response.use(response => { return response }, error => {
  if (error.message.includes('timeout')) {
    message.warn('网络错误，请求超时')
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

export default service
