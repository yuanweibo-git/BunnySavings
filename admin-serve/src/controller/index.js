class Process {
    static users = require('./user/index')

    static async login(req, res) {
      const { userName, passWord } = req.query

      // 查询是否有该用户，密码是否正确
      const message = await Process.users.login(userName, passWord)

      res.send(message)
    }
}

module.exports = {
  login: Process.login
}
