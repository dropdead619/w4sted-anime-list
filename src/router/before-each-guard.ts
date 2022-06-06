import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';

router.beforeEach((to) => {
  if (useAuthStore().userId !== null) {
    if (to.meta.onlyLoggedOut)
      return { name: 'default' };

    else
      return;
  }

  if (!to.meta.onlyLoggedOut)
    return { name: 'auth' };
});
