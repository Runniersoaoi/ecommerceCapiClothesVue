import { createRouter, createWebHistory } from 'vue-router';
import ShopLayout from '@/module/shop/layout/ShopLayout.vue';
import HomeView from '@/module/shop/views/HomeView.vue';
import shopRoutes from '@/module/shop/routes';
import { authRoutes } from '@/module/auth/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'principal',
      redirect: { name: 'home' },
      component: ShopLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        shopRoutes,
        {
          path: '/product/:id',
          name: 'product',
          props: true,
          component: () => import('@/module/shop/views/ProductView.vue'),
        },
        {
          path: '/product-cart',
          name: 'product-cart',
          props: true,
          component: () => import('@/module/shop/views/ProductCartView.vue'),
        },
      ],
    },
    authRoutes,
  ],
});

export default router;
