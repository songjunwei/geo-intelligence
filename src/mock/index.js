
const mock = [
  // 登录模拟
  {
    type: 'get',
    url: '/api/login',
    data: {
      token:'admin',
      name: '管理员'
    }
  },
  // 标题获取
  {
    type: 'get',
    url: '/api/titles',
    data: [
      '标题1',
      '标题2'
    ]
  }
]

module.exports = mock