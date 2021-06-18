import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './css/style.css'
import router from './router'

Vue.prototype.$api = "http://localhost:7888/coffee/api/coffee"
Vue.prototype.$isLogged = 'HERE';

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
