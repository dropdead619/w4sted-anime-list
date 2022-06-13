<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';

const { x } = useMouse({ touch: false });
const appStore = useAppStore();
appStore.currentPage = 1;
</script>

<template>
  <div class="container flex justify-between px-4 pt-8 m-auto">
    <div class="max-w-3xl">
      <h1 class="mb-16 text-8xl dark:drop-shadow-[0rem_0rem_1rem_#f0f]">
        w4sted4niList
      </h1>
      <div class="max-w-2xl text-4xl  drop-shadow-[0rem_0rem_1rem_#0ff] mb-20">
        Create your own list of anime titles you watched or will watch in the future!
        Browse through various genres, most watched anime titles, rate ones you like and have fun!
      </div>
      <RouterLink :to="{ name: 'titles' }" class="px-4 py-2 text-4xl rounded bg-primary hover:hue-rotate-60 hover:drop-shadow-[0rem_0rem_0.4rem_#0ff]">
        Get started...
      </RouterLink>
    </div>
    <div class="max-w-3xl bg-glow">
      <img
        src="../assets/main-page.webp"
        height="980"
        width="849"
        draggable="false"
        alt="Asuka"
        class="overflow-y-hidden drop-shadow-[0rem_0rem_0.7rem_#fff]"
        :style="`transform: translate3D(${x / 120}px, 7px, 50px)`"
      >
    </div>
  </div>
</template>
