import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'Empty'},
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'Empty'},
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/',
    name: 'loadFiles',
    meta: {layout: 'Default'},
    component: () => import( '../views/loadFiles.vue')
  },
  {
    path: '/about',
    name: 'myFiles',
    meta: {layout: 'Default'},
    component: () => import( '../views/myFiles.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
