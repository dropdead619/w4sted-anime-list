<script setup lang="ts">
import TheHeader from './components/layouts/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
