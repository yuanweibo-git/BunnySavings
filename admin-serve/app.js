const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/router/index')

const webApp = express()

// 设置接收数据的格式，表单数据和json格式的都行
webApp.use(bodyParser())
webApp.use(bodyParser.urlencoded({ extended: false }))
webApp.use(bodyParser.json())

webApp.all('*', (req, res, next) => {
  // 允许跨域
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888')
  // 设置请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')

  next()
})

webApp.use(router)

// 服务器错误处理
webApp.use((err, req, res, next) => {
  console.error('server error: ', err)

  res.status(500).send({
    statusCode: 500,
    message: '服务器错误'
  })
})

// 路径错误处理
webApp.use((req, res) => {
  res.status(404).send({
    statusCode: 404,
    message: '路径错误，找不到资源'
  })
})

webApp.listen(3399, (err) => {
  if (err) console.error(err)
  console.log('服务开启')
})

module.exports = {
  webApp
}
