import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const scrollBehavior = (_: any, _1: any, savedPosition: any) => {
  return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior,
});

export default router;
