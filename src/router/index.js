import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import InfoPage from '../views/InfoPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/',
      name: 'info',
      component: InfoPage
    },

  ]
})

export default router
