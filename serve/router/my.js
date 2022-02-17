const express = require('express')
// 创建路由对象
const router = express.Router()

// 测试
router.get('/test', (req, res) => {
  res.cc('test')
})

// 将路由对象共享出去
module.exports = router
