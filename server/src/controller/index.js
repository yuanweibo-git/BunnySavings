const users = require('./user/index')
const Token = require('./token/index')

const login = async(req, res) => {
  const { username, password } = req.body
  // console.log(req.query)
  // console.log({ userName, passWord })

  // 查询是否有该用户，密码是否正确
  const message = await users.login(username, password)

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
