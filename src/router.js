import Vue from 'vue';
import Router from 'vue-router';
import Content_login from './components/Content_login.vue';
import Content from './components/Content.vue';
import Nfirst from './views/Nfirst.vue';
import Sfirst from './views/Sfirst.vue';
import Mfirst from './views/Mfirst.vue';
import Efirst from './views/Efirst.vue';
import Ofirst from './views/Ofirst.vue';
import Weekf from './views/Weekf.vue';
import firebase from 'firebase';
import Searchh from './components3/Searchpage.vue';
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'content',
      component: Content
    },
    {
      path:'/search',
      name: 'search',
      component: Searchh,
      
    },
    {
      path:'/content_login',
      name: 'content_login',
      component: Content_login,
      meta: {
        requiresAuth: true
      }
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
      name: 'south',
      component: Sfirst
    },
    {
      path: '/medium',
      name: 'medium',
      component: Mfirst
    },
    {
      path: '/east',
      name: 'east',
      component: Efirst
    },
    {
      path: '/outer',
      name: 'outer',
      component: Ofirst
    }
  ]
});

// router.beforeEach((to, from, next) =>{
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) =>{
    
//     next('content');
 
// }
//   else if (!requiresAuth && currentUser) next('content_login');
//   else next();
// });

export default router;