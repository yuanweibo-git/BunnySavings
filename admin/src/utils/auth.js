import Cookies from 'js-cookie'

const TokenKey = 'BunnySavings'
const timeStamp = 'vue_timestamp'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTimeStamp() {
  return Cookies.set(timeStamp, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(timeStamp)
}

export function removeTimeStamp() {
  return Cookies.remove(timeStamp)
}
