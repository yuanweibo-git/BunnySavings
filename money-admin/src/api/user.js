import request from '@/utils/request'

export function login() {
  return request({
    url: '/login',
    method: 'post',
    params: {
      userName: 'admin',
      passWord: '123456'
    }
  })
}

