const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../model/user')

// 注册用户
router.post('/register', userHandler.register)

// 登录
router.post('/login', userHandler.login)

// 图形验证码
router.get('/codeimg', userHandler.codeimg)

// 退出登录
router.get('/logout', userHandler.logout)

// 将路由对象共享出去
module.exports = router
