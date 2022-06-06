<script setup lang="ts">
import TheHeader from './components/layouts/TheHeader.vue';
</script>

<template>
  <div id="app">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
