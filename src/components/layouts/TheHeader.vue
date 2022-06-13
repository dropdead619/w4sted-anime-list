<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const auth = useAuthStore();

const isLoggedIn = computed(() => auth.token);

const logoRedirect = computed(() => {
  return isLoggedIn.value ? { name: 'titles' } : { name: 'main' };
});
</script>

<template>
  <div class="flex justify-between w-full h-12 py-2 pl-16 align-middle bg-white shadow-md dark:bg-theme-dark-4 pr-11 dark:shadow-sm dark:shadow-slate-50" />
  <div class="fixed top-0 left-0 right-0 z-10 flex justify-between w-full h-12 py-2 pl-16 align-middle bg-white shadow-md dark:bg-theme-dark-4 pr-11 dark:shadow-sm dark:shadow-slate-50">
    <div class="fixed flex mt-2 left-4">
      <IconBack class="w-8 mr-1 cursor-pointer" @click="$router.go(-1)" />
    </div>
    <div class="text-xl sm:text-2xl dark:text-slate-50">
      <RouterLink :to="logoRedirect" class="flex font-bold dark:drop-shadow-[0rem_0rem_1rem_#f0f]">
        w4sted4niList
      </RouterLink>
    </div>
    <div class="flex items-center">
      <BaseButton class="mx-11 bg-primary" @click="toggleDark()">
        <IconMoon v-if="isDark" />
        <IconSun v-else />
      </BaseButton>
      <RouterLink v-if="!isLoggedIn" :to="{ name: 'auth' }">
        Login
      </RouterLink>
      <BaseButton v-else @click="auth.signout()">
        Logout
      </BaseButton>
    </div>
  </div>
</template>
