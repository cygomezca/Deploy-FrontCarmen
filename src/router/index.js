import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/empresas'
  },
  {
    path: '/empresas',
    name: 'empresas',
    component: () => import(/* webpackChunkName: "empresas" */ '../views/Empresas.vue')
  },
  {
    path: '/empresas/:id/update',
    name: 'empresas-update',
    component: () => import(/* webpackChunkName: "empresas-update" */ '../views/EmpresasUpdate.vue')
  },
  {
    path: '/platos',
    name: 'platos',
    component: () => import(/* webpackChunkName: "platos" */ '../views/Platos.vue')
  },
  {
    path: '/tipodeplatos',
    name: 'tipodeplatos',
    component: () => import(/* webpackChunkName: "tipodeplatos" */ '../views/Tipodeplatos.vue')
  },
  {
    path: '/tipodeplatos/create',
    name: 'tipodeplatos-create',
    component: () => import(/* webpackChunkName: "tipodeplatos-create" */ '../views/TipodeplatoCreate.vue')
  },
  {
    path: '/tipodeplatos/:id/update',
    name: 'tipodeplatos-update',
    component: () => import(/* webpackChunkName: "tiposdeplatos-update" */ '../views/TipodeplatoUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
