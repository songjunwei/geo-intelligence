/* webpack扩展配置  */
module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
      before(app) {
        app.get('/api/titles', function(req, res) { // mock接口
          res.json({
            code: '200',
            list: [
              '标题1',
              '标题2',
            ]
          })
        })
      }
    }
  }
}