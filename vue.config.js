module.exports = {
  configureWebpack: {
      devServer: {
          before(app) {
             app.get('/api/login', function(req, res){

                  res.json({
                      code:200,
                      data: {
                        token:'admin',
                        name:'管理员'
                      }
                  })
             }) 
          }
      }
  }
}