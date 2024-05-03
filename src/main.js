import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './views/Home.vue'
import WhatWeDo from './views/WhatWeDo.vue'
import WhoWeAre from './views/WhoWeAre.vue'
import LatestNews from './views/LatestNews.vue'
import Gallery from './views/Gallery.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/whatwedo', component: WhatWeDo },
    { path: '/whoweare', component: WhoWeAre },
    { path: '/latestnews', component: LatestNews },
    { path: '/gallery', component: Gallery },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHistory(),
    routes, // short for `routes: routes`
  })
  

  const app = createApp(App);
  app.use(router); // Use the router
  
  app.mount('#app');