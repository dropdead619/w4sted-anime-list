<script setup lang="ts">
import type { AnimeTitle } from '@/config/types';

interface Props {
  title: AnimeTitle
}

const props = defineProps<Props>();
</script>

<template>
  <BaseCard class="bg-slate-200 dark:bg-theme-dark-2">
    <div class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
      <img
        class="h-full mr-4 drop-shadow-[0rem_0rem_0.2rem_#fff] rounded-lg"
        :src="props.title.images.webp.image_url"
        :alt="props.title.title"
      >
      <div class="p-4">
        <h2 class="mb-4 text-2xl font-semibold">
          {{ props.title.title }}
        </h2>
        <div>{{ props.title.synopsis ?? 'No description' }}</div>
      </div>
    </div>
  </BaseCard>
</template>
