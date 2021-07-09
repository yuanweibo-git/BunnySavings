import { getToken, setToken } from '@/utils/auth'
import { login } from '@/api/user'
import { message } from 'ant-design-vue'

export default {
  namespaced: true,
  state: {
    tokenKey: getToken()
  },

  mutations: {
    setToken(state, data) {
      state.tokenKey = data
      setToken(data)
    }
  },

  actions: {
    async  login(context, data) {
      const res = await login(data)
      message.success('登录成功')
      context.commit('setToken', res)
      return res
    }
  }
}
