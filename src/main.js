import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios';
import firebase from 'firebase';

Vue.prototype.$axios = axios
Vue.config.productionTip = false;

let config = {
  apiKey: "AIzaSyD75cVtt_IJoyf0w6-9cQtxY_aYHXILfKQ",
  authDomain: "beauday-ab6a0.firebaseapp.com",
  databaseURL: "https://beauday-ab6a0.firebaseio.com",
  projectId: "beauday-ab6a0",
  storageBucket: "beauday-ab6a0.appspot.com",
  messagingSenderId: "1871442648618714426486"
};
firebase.initializeApp(config);

let app = '';
let cha =function() {
  
 if(this.taipeiW = '晴'){
  return 2;
}
}
firebase.auth().onAuthStateChanged(()=> {
  if(!app) {
    app = new Vue({
      router,
      render: h =>h(App)
    }).$mount('#app');
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
