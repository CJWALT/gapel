import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './views/Home.vue'


const routes = [
    { path: '/', component: Home },
    // { path: '/about', component: About },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHistory(),
    routes, // short for `routes: routes`
  })
  

  const app = createApp(App);
  app.use(router); // Use the router
  
  app.mount('#app');