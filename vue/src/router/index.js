import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由重定向
  {
    path: '',
    redirect: '/login',
  },
  // 登录页路由
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  // 注册页路由
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register'),
  },
  //系统首页
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home'),
  },
  // 401页面
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error/401'),
  },
  // 404页面
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
