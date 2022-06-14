<script setup lang="ts">
import ThePreloader from './components/ThePreloader.vue';
import { useGlobalLoading } from './composables/useLoading';
const { isLoading } = useGlobalLoading();
</script>

<template>
  <RouterView />
  <ThePreloader v-if="isLoading" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
