const mock = require('./src/mock') // 配置模拟数据

module.exports = {
  //publicPath: '/', // 默认启动为ip + 端口 
  // pages: { // 多页面的配置
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     title: 'titleindex' // htmlWebpackPlugin.options.title
  //   }
  // },
  lintOnSave: process.env.NODE_ENV !== 'production', // 保存是否进行eslint检查
  devServer: {
    before(app) {
      mock.map(item => {
        app[item.type](item.url, (req, res) => {
          res.json({
            code: 200,
            data: item.data
          })
        })
      })
    }
  }

}