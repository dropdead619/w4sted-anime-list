import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';

router.beforeEach((to) => {
  if (useAuthStore().token) {
    if (to.meta.onlyLoggedOut)
      return { name: 'default' };
  }
});
