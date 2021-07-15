import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/contact',
    component: () => import(/* webpackChunkName: "message" */ '../views/contact')
  },
  {
    path: '/discovery',
    component: () => import(/* webpackChunkName: "message" */ '../views/discovery')
  },
  {
    path: '/my',
    component: () => import(/* webpackChunkName: "message" */ '../views/my')
  },
  // {
  //   path: '/chat',
  //   component: () => import(/* webpackChunkName: "message" */ '../views/chat')
  // },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "message" */ '../views/search')
  },
  {
    path: '/pengyouquan',
    component: () => import(/* webpackChunkName: "message" */ '../views/pengyouquan')
  },
  {
    name: 'chat',
    path: '/chat/:thisChat',
    component: () => import(/* webpackChunkName: "message" */ '../views/chat')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
