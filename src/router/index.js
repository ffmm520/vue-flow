import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/List.vue'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   /*
//     to: 将要访问的路径,
//     from: 代表从哪个路径跳转而来
//     next: 是一个函数,表示放行, next('/login)
//   */
//   // 登录页面放行
//   if (to.path === '/login') {
//     return next()
//   }
//   // 其他页面, 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   // token为空
//   if (!tokenStr) {
//     return next('/login')
//   }
//   next()
// })

export default router
