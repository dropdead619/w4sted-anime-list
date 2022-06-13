<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center pt-12 m-auto text-center w-fit">
    <img
      class="max-w-xl border"
      src="../assets/404.png"
      alt="404"
    >
    <h2 class="text-9xl">
      404
    </h2>
    <h2 class="text-5xl">
      Page not found
    </h2>
    <h3 class="text-3xl">
      Go <RouterLink class="text-blue-500 " :to="{ name: 'titles' }">
        back?
      </RouterLink>
    </h3>
  </div>
</template>
