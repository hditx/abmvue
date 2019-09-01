import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'buscar',
      component: () => import('./views/Buscar.vue')
    },
    {
      path: '/listado/:nombre/:tipodocumento',
      name: 'listado',
      component: () => import('./views/Listado.vue')
   },{
      path: '/formulario',
      name: 'formulario',
      component: () => import('./views/Formulario.vue')
   },{
      path: '/formulario/:id',
      name:'formulario',
      component: () => import('./views/Formulario.vue')
   }
  ]
})
