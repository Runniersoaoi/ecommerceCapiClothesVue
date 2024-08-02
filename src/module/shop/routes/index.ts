import { type RouteRecordRaw } from 'vue-router';

const shopRoutes: RouteRecordRaw = {
  path: '/products',
  name: 'products',
  component: () => import('@/module/shop/views/ProductsView.vue'),
  props: (route) => ({ page: route.query.page || 1 }),
  children: [
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('@/module/shop/views/ProductView.vue'),
    },
  ],
};

export default shopRoutes;
