import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3399/admin',
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

service.interceptors.response.use(response => {
  return response
})

export default service
