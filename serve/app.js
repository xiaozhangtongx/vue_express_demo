// 导入express
const express = require('express')
// 创建服务器实例
const app = express()
// 服务端口号
const port = 9002

// 导入并配置cors中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单的中间件
app.use(express.urlencoded({ extended: false }))

// 导入配置文件
const config = require('./config')

// 解析 token 的中间件
const expressJWT = require('express-jwt')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 响应数据的中间件
app.use((req, res, next) => {
  // status = 0 为成功； status = 500 为失败； 默认将 status 的值设置为 500，方便处理失败的情况
  res.cc = function (err, status = 500) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入并使用路由模块
const routes = require('./router/index')
// app.use('/api', routes)
routes(app)

// 错误中间件
app.use(function (err, req, res, next) {
  // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 500,
      message: '身份认证失败！',
    })
  }
  // 未知错误
  res.send({
    status: 500,
    message: err,
  })
})

// 2启动服务器
app.listen(port, () => console.log(`api server running at http://127.0.0.1:${port}`))
