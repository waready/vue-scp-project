import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue'
import FormulariCategoria from '@/components/FormularioCategoria.vue'
import FormulariScp from '@/components/FormularioSpc.vue'
import ListScp from '@/components/ListScp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: FormulariCategoria
  },
  {
    path: '/allscp',
    name: 'allscp',
    component: ListScp
  },
  {
    path: '/scp',
    name: 'scp',
    component: FormulariScp
  },
  {
    path: '*',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
