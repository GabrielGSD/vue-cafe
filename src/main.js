import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './css/style.css'
import router from './router'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
