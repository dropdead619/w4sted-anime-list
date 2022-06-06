import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      name: 'MainPage',
    },
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('../pages/MainPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    meta: {
      title: 'Error 404 | Page not found',
    },
    component: () => import('../pages/Error404.vue'),
  },
];
