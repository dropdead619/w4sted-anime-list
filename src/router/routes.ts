import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: {
      onlyLoggedOut: true,
    },
    component: () => import('@/layouts/TheLayoutAuth.vue'),
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import('../pages/auth/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'default',
    redirect: {
      name: 'main',
    },
    component: () => import('@/layouts/TheLayoutDefault.vue'),
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('../pages/MainPage.vue'),
      },
      {
        path: '/titles',
        name: 'titles',
        component: () => import('../pages/titles/TitlesMain.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    meta: {
      title: 'Error 404 | Page not found',
    },
    component: () => import('../pages/Error404.vue'),
  },
];
