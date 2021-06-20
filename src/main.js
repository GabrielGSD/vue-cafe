import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './css/style.css'
import router from './router'
import VueTheMask from 'vue-the-mask'
import { VueMaskDirective } from "v-mask";
import firebase from 'firebase';

Vue.directive("mask", VueMaskDirective);

var firebaseConfig = {
  apiKey: "AIzaSyBlbZqRblH726FidPyQ7iYPlZMbo-npadE",
  authDomain: "conectacafe-23115.firebaseapp.com",
  projectId: "conectacafe-23115",
  storageBucket: "conectacafe-23115.appspot.com",
  messagingSenderId: "734104823289",
  appId: "1:734104823289:web:567cc0c497bd219bf04928",
  measurementId: "G-95V0RMPRH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$api = "http://localhost:7888/coffee/api/coffee"

new Vue({
  vuetify,
  router,
  VueTheMask,
  render: h => h(App)
}).$mount('#app')
