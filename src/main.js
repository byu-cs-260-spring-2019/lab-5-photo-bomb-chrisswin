import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from 'firebase';
import axios from 'axios';

window.axios = require('axios');

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDFWYEdDZTqO4wKyo42J81UTIRIaVtP93A",
    authDomain: "photo-bomb-38591.firebaseapp.com",
    databaseURL: "https://photo-bomb-38591.firebaseio.com",
    projectId: "photo-bomb-38591",
    storageBucket: "photo-bomb-38591.appspot.com",
    messagingSenderId: "800129537750",
    appId: "1:800129537750:web:f6058d7377aff3e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
