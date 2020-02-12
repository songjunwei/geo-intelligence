import Mock from 'mockjs'

import userApi from './user'

Mock.mock(/\/api\/login/, 'get', userApi.login)
Mock.mock(/\/api\/titles/, 'get', userApi.getTitles)