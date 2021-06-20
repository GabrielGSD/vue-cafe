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
      component: () => import('./views/Home.vue')
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: () => import('./views/Entrar.vue')
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('./views/Cadastrar.vue')
    },
    {
      path: '/fazenda',
      name: 'fazenda',
      component: () => import('./views/Fazenda.vue')
    },
    {
      path: '/cafe',
      name: 'cafe',
      component: () => import('./views/Cafe.vue')
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: () => import('./views/Catalogo.vue')
    },
    {
      path: '/sobreFazenda',
      name: 'sobre Fazenda',
      component: () => import('./views/SobreFazenda.vue')
    },
    
  ]
})
