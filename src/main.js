import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import '@/mock'; // mock数据

import ElementUI from 'element-ui'
Vue.use(ElementUI);
import('element-ui/lib/theme-chalk/index.css')

import Cesium from 'cesium/Cesium'
import widget from 'cesium/Widgets/widgets.css'
window.Cesium = Cesium

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
