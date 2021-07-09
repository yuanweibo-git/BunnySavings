class Router {
  constructor() {
    const express = require('express')
    // const path = require('path')
    const process = require('../controller')

    // 创建路由实例
    this.myRouter = express.Router()

    // 登录接口
    this.myRouter.post('/admin/login', process.login)
  }

  /**
   * @description 返回路由实例
   */
  backRouter() {
    return this.myRouter
  }
}

// 创建实例
const ROUTERS = new Router()

// 导出路由实例
module.exports = ROUTERS.backRouter()
