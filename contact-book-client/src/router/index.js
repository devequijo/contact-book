import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/contactList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact/:index',
    name:'viewcontact',
    component: ()=> import('../views/viewcontact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
