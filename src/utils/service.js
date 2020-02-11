import axios from 'axios'


// 创建axios实例
// let service =  axios.create({
//  // baseURL: process.env.BASE_API, // api的base_url
//   timeout: 5000 // 请求超时时间
// })
let service =  axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
   timeout: 5000 // 请求超时时间
 })
// request拦截器
service.interceptors.request.use(config => {
  // 请求逻辑操作...

  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
   /**
    * code:200,接口正常返回;
    */
    const res = response.data

    if (res.code != 200) {
      // 返回错误的拦截逻辑...

      return Promise.reject('error')
    } else { // res.code === 200,正常返回数据
        return response.data
    }
  },
  error => {

    return Promise.reject(error)
  }
)

export default service;
