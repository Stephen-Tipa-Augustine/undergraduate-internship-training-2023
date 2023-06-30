import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
      requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && localStorage.getItem('user')) {
    const token = JSON.parse(localStorage.getItem('user')).access;
    axios.get(
        'http://localhost:8000/authentication/is-user-authenticated/',
        {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
      .then((response) => {
        if ( response.data.active) {
          next();
        }  else {
          next('/login');
        }
      })
      .catch(() => {
        next('/login');
      });
  } else if (requiresAuth && !localStorage.getItem('user')) {
    next('/login');
  } else {
    next();
  }
});

export default router
