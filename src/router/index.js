import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

import LoginPage from '@/views/Pages/Login/LoginPage.vue';
import Dashboard from '@/views/Pages/Dashboard.vue';

import Planes from '@/views/Pages/Planes/Index.vue';
import Procesos from '@/views/Pages/Procesos/Index.vue';
import AgregarProceso from '@/views/Pages/Procesos/AgregarProceso.vue';
import EditarProceso from '@/views/Pages/Procesos/EditarProceso.vue';

import Partidas from '@/views/Pages/Procesos/Partidas/Index.vue';
import NotFoundPage from '@/views/Pages/NotFoundPage.vue';
import Test from '@/views/Pages/Test.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true} },
  { path: '/planes', name: 'Planes', component: Planes, meta: { requiresAuth: true} },
  { path: '/planes/:id/procesos', name: 'Procesos', component: Procesos, meta: { requiresAuth: true} },
  { path: '/planes/:id/procesos/create', name: 'AgregarProceso', component: AgregarProceso, meta: { requiresAuth: true} }, 
  { path: '/planes/:id/procesos/:procesoId/edit', name: 'EditarProceso', component: EditarProceso, meta: { requiresAuth: true} }, 

  //{ path: '/planes/:id/procesos/:proceso_id', name: 'ProcesoDetalles', component: ProcesoDetalles, meta: { requiresAuth: true} }, 
  
  { path: '/partidas', name: 'Partidas', component: Partidas, meta: { requiresAuth: true} },

  { path: '/test', name: 'Test', component: Test, meta: { requiresAuth: true} },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token'); 

  if (to.name === 'Login' && token) {
    
    const authStore = useAuthStore();
    authStore.login(token);
    router.push({ name: 'Planes' });
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!token) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }

});

export default router;


// Lazy loading
// { path: '/about', name: 'About', component: () => import('../views/AboutPage.vue') },