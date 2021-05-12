const jsonwebtoken = require('jsonwebtoken')
const key = 'savings'

function createToken() {
  return jsonwebtoken.sign({}, key, { expiresIn: 60 * 60 * 10 })
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, key, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
module.exports = {
  createToken,
  verifyToken
}

