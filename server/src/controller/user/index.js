const database = require('../../database/database')
const Token = require('../token/index')

async function queryUser(userName) {
  const sqlStr = 'select * from users where userName = ?;'
  const user = await database.query(sqlStr, [userName])
  return Boolean(user !== false && user.length)
}

async function login(userName, passWord) {
  const sqlStr = 'select * from users where userName = ? and passWord = ?;'
  const isUser = await queryUser(userName)
  const userInfo = await database.query(sqlStr, [userName, passWord])

  if (!isUser || isUser.length === 0) {
    return {
      code: 401,
      msg: '账号不存在',
      success: false
    }
  }

  if (userInfo.length !== 0) {
    return {
      code: 100,
      msg: '登录成功',
      token: Token.createToken(),
      success: true
    }
  } else if (userInfo === false || userInfo.length === 0) {
    return {
      code: 402,
      msg: '密码错误',
      success: false
    }
  } else {
    return {
      code: 403,
      msg: '系统繁忙，请稍后再试！',
      success: false
    }
  }
}

module.exports = {
  login
}
