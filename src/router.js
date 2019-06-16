import Vue from 'vue'
import Router from 'vue-router'
import Content from './components/Content.vue'
import Nfirst from './views/Nfirst.vue'
import Weekf from './views/Weekf.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'content',
      component: Content
    },
    {
      path: '/north',
      name: 'north',
      component: Nfirst
    },
    {
      path: '/weekf',
      name: 'weekf',
      component: Weekf
    }
  ]
})
