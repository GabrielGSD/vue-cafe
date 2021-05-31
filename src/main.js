import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import './css/style.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: 'fa4',
  },
  render: h => h(App),
}).$mount('#app')

