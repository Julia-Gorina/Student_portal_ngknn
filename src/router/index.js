import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reference from "@/views/Reference";
import Schedule from "@/views/Schedule";
import Sections from "@/views/Sections";
import Department from "@/views/Department";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/reference',
    name: 'reference',
    component: Reference
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/Sections',
    name: 'Sections',
    component: Sections
  }
  ,
  {
    path: '/department/:id',
    name: 'Department',
    component: Department
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
