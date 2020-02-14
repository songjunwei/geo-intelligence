/* 首页用到的接口 */
import service from '@/utils/service'

export  function getTitles() {
  return service({
    url: '/api/titles',
    method: 'get'
  })
} 

export function login(params) {
  
  return service({
    url: '/api/login',
    method: 'get',
    data: params
  })
}
