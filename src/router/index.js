import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Adresse from '../components/Adresse.vue'
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adresse',
    name: 'Adresse',
    component: Adresse,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //console.log(`navigue de ${from.name} vers ${to.name}`)
  //console.log('store : ', store.getters.isAuthenticated ,'tomatched : ' ,to.matched,'state : ', store.state)
  if (to.meta.requiresAuth) {
    if (!store.state.authenticated) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
