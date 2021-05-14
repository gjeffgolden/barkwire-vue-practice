import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'

const routes = [{
    name: "index",
    path: "/",
    component: Home,
}, {
    name: "dogs",
    path: "/dogs",
    component: Dogs,
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
