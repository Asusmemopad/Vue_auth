import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Registration from '@/components/Registration'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
