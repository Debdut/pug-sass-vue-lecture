import Vue from 'vue'
import Router from 'vue-router'
import Pug from '@/components/Pug'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pug',
      component: Pug
    }
  ]
})
