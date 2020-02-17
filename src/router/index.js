import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Home from '../views/home.vue'
import Login from '../views/permission/login.vue'
import Layout from '@/components/layout'
import Map from '../views/map'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{ // 可以存储meta信息
			title:'登录页'
		},

  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/about.vue')
      },
      {
        path: 'map',
        name: 'Map',
        component: Map
      }
    ]

  }

]

const router = new VueRouter({
  mode: 'history',
  //base: '/permission/', // 添加跟目录,对应服务器部署子目录
  routes
})

const whiteList = ['/login'] // 不重定向白名单

// 路由守卫
router.beforeEach((to, from, next) => {
  
  NProgress.start()
  // 点击登录时，有token如果是登录页直接进入首页
  if (localStorage.getItem('Token')) {
    if(to.path === '/login' || to.path === '/') {
      next({ path: '/home' })  
    } else {
      next()
    }
    NProgress.done() 
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
