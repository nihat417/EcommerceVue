import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/modules/authStore';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
  
    if (to.meta.requiresAuth) {
      if (!authStore.isAuthenticated()) {
        return next({ name: 'login' });
      }
    } else {
      if (authStore.isAuthenticated() && to.name === 'login') {
        return next({ name: 'home' });
      }
    }
  
    next();
  });  
  export default router;