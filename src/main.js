import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../node_modules/element-ui/lib/index.js'
import axios from 'axios'
Vue.prototype.$http = axios
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 配置请求拦截器,配置token,
// request拦截器中展示进度条
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// response拦截器中隐藏进度条
axios.interceptors.response.use(config => {
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
