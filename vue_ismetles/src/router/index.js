import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue';
import Typicode from '../components/Typicode.vue';
import RandomUsers from '../components/RandomUsers.vue';


const router = createRouter({
  history: createWebHistory(),  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path:'/typicode',
      name:'typicode',
      component:Typicode
    },
    {
      path:'/randomusers',
      name:'randomusers',
      component:RandomUsers
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router