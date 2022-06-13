<script setup lang="ts">
import { apiGET } from '@/api/jikanApiRequests';
import type { AnimeTitle } from '@/config/types';
import { AnimeType } from '@/config/types';

const route = useRoute();

const title = ref<AnimeTitle>();

const ratingClass = computed(() => {
  if (!title.value?.score)
    return 'text-gray-400';

  const score = title.value.score;

  if (score <= 10 && score >= 7)
    return 'text-green-400';

  else if (score < 7 && score >= 4)
    return 'text-yellow-500';

  else if (score < 4)
    return 'text-red-400';
});

const getAnimeById = async () => {
  const response = await apiGET(`anime/${route.params.id}/full`);
  title.value = response.data;
};

getAnimeById();
</script>

<template>
  <BaseCard v-if="title" class="mt-12 bg-slate-200 dark:bg-theme-dark-2">
    <div class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
      <img
        class="max-w-lg h-full mr-4 drop-shadow-[0rem_0rem_0.2rem_#fff] rounded-lg"
        :src="title.images.webp.large_image_url"
        :alt="title.title"
      >
      <div class="p-4">
        <div class="mb-4 ">
          <h2 class="text-4xl font-semibold">
            {{ title.title }} <span class="text-gray-400 text-xl">{{ title.title_japanese }}</span>
          </h2>
          <span class="text-gray-400 text-sm"> {{ title.year }} | {{ title.duration }} |
            <template v-if="title.type !== AnimeType.MOVIE">
              {{ title.episodes }} episodes |
            </template> {{ title.type }} </span>
          <div class="mt-4 text-lg">
            Score: <span :class="ratingClass">{{ title.score ?? 'Unscored' }} </span>
          </div>
        </div>

        <div>{{ title.synopsis ?? 'No description' }}</div>
      </div>
    </div>
  </BaseCard>
</template>
