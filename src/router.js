import Vue from 'vue'
import Router from 'vue-router'
import Content from './components/Content.vue'
import Nfirst from './views/Nfirst.vue'
import Sfirst from './views/Sfirst.vue'
import Mfirst from './views/Mfirst.vue'
import Efirst from './views/Efirst.vue'
import Ofirst from './views/Ofirst.vue'
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
    },
    {
      path: '/south',
      name: 'sorth',
      component: Sfirst
    },
    {
      path: '/medium',
      name: 'morth',
      component: Mfirst
    },
    {
      path: '/east',
      name: 'eorth',
      component: Efirst
    },
    {
      path: '/outer',
      name: 'oorth',
      component: Ofirst
    }
  ]
})
