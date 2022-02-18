module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // 关闭ESLINT校验工具
  lintOnSave: false,
  // 设置端口号
  devServer: {
    open: process.platform === 'vue',
    host: '127.0.0.1',
    port: 9000,
    https: false,
    hotOnly: false,
    // 处理跨域
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9002',
      },
    },
    disableHostCheck: true,
  },
}
