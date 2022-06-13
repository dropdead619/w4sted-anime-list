<script setup lang="ts">
import type { AnimeTitle } from '@/config/types';

interface ListProps {
  list: AnimeTitle[]
}

const props = defineProps<ListProps>();
</script>

<template>
  <div class="py-12">
    <div
      v-for="title in props.list"
      :key="title.mal_id"
    >
      <TitleItem
        :title="title"
        class="cursor-pointer"
        @click="$router.push({ name: 'title', params: { id: title.mal_id } })"
      />
    </div>
  </div>
</template>
