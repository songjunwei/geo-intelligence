import Mock from 'mockjs'

export default {
  login: config => {
    let data = JSON.parse(config.body);
    let userList = {};
    if(data.username === 'admin' && data.password == '123456'){
        userList = {
            token:'admin',
            name:'管理员',
        }
    }else if(data.username === 'editor'){
        userList = {
            token:'editor',
            name:'编辑员',
        }
    }else{
       return {
        code: -1,
        data: {
          msg: "用户名错误",
          status:'fail'
        }
       }
    }
    return {
      code: 200,
      data: {
        userList: userList
      }
    }
  },
  getTitles: config => {
    return {
      code: 200,
      data: {
        list: [
          '标题1',
          '标题2',
        ]
      }
    }
  }
}