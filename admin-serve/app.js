const express = require('express')

const database = require('./src/database/database')
// const db = require('./db');

const webApp = express()

webApp.all('*', (req, res, next) => {
  // 允许跨域
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888')
  // 设置请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')

  next()
})

webApp.listen(3300, (err) => {
  console.log('服务开启')
  if (err) {
    console.log(err)
  }
})

webApp.get('/getUser', (req, res) => {
  // console.log(req.query) // 输出{name: 'tom'}
  res.send('给你一个学生')
})

webApp.get('/login', (req, res) => {
  console.log(req)
  res.send('123')
})
