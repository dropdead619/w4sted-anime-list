import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';

router.beforeEach((to) => {
  document.title = to.meta.title as string ?? 'w4sted4nilist';
  if (useAuthStore().token) {
    if (to.meta.onlyLoggedOut)
      return { name: 'titles' };
  }
});
