import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from "../views/Start";
import NoMobileDetected from "@/views/Error/NoMobileDetected";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/mobile',
    name: 'NoMobileDetected',
    component:  NoMobileDetected
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
