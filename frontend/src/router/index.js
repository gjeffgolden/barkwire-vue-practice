import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Places from '../views/Places.vue'

const routes = [{
    name: "index",
    path: "/",
    component: Home,
}, {
    name: "dogs",
    path: "/dogs",
    component: Dogs,
}, {
    name: "places",
    path: "/places",
    component: Places,
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
