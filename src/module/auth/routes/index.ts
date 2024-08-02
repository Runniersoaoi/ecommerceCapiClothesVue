import type { RouteRecordRaw } from 'vue-router';

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  redirect: { name: 'register' },
  component: import('../layout/AuthLayout.vue'),
  children: [
    {
      path: '/register',
      name: 'register',
      component: import('@/module/auth/views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/module/auth/views/LoginView.vue'),
    },
  ],
};
