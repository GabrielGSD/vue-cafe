import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: () => import(/* webpackChunkName: "about" */ './views/Entrar.vue')
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import(/* webpackChunkName: "about" */ './views/Cadastrar.vue')
    },
    
  ]
})
