import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3300',
  timeout: 5000
})

export default service
