import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reference from "@/views/Reference";
import Schedule from "@/views/Schedule";
import Sections from "@/views/Sections";
import Department from "@/views/Department";
import FullSchedule from "@/views/FullSchedule";

const routes = [
  {
    path: '/:day?',
    name: 'Home',
    component: Home,
    props: true
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
    path: '/fullschedule/:id',
    name: 'FullSchedule',
    component: FullSchedule,
    props: true
  },
  {
    path: '/department/:id',
    name: 'Department',
    component: Department
  },
  {
    path: '/teachers',
    name: 'Teacher',
    component: Department
  },
  {
    path: '/fullschedule_teacher/:id',
    name: 'Fullschedule_teacher',
    component: FullSchedule,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
