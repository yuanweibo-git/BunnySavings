import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    params: {
      userName: data.username,
      passWord: data.password
    }
  })
}

