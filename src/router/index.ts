import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "./../views/HomePage.vue"
import DetailPage from "./../views/NewsDetail.vue"
import LoginPage from "./../views/LoginPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: DetailPage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
