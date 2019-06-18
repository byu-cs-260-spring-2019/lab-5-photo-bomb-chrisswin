import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import MyPage from './views/MyPage.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Register',
      name: 'about',
      component: Register
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
