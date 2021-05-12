const users = require('./user/index')
const Token = require('./token/index')

const login = async(req, res) => {
  const { userName, passWord } = req.query

  // 查询是否有该用户，密码是否正确
  const message = await users.login(userName, passWord)

  res.send(message)
}

// const abc = async(req, res) => {
// let token = req.headers.authorization

// token = token.split(' ')[1]

// Token.verifyToken(token).then((res1) => {
//   console.log(res1)
// }).catch(err => {
//   console.log(err)
// })
//
//   // res.send('123')
// }
module.exports = {
  login
}
