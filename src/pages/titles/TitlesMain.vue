<script setup lang="ts">
import VuePaginationTw from 'vue-pagination-tw';
import { apiGET } from '@/api/jikanApiRequests';

interface IPagination {
  page: number
  perPage: number
  total: number
}

const state = reactive({
  pagination: undefined as IPagination | undefined,
  data: null as any,
});

const getTopAnimeList = async (page?: number) => {
  const response = await apiGET(`top/anime?page=${page ?? 1}`);
  state.pagination = {
    page: response.pagination.current_page,
    perPage: response.pagination.items.per_page,
    total: response.pagination.items.total,
  };
  state.data = response.data;
};

getTopAnimeList();

const onChange = (page: number) => {
  getTopAnimeList(page);
};
</script>

<template>
  <div class="container m-auto">
    <div class="py-12">
      <div
        v-for="anime in state.data"
        :key="anime.mal_id"
      >
        <BaseCard class="bg-slate-200 dark:bg-theme-dark-2">
          <div class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
            <img
              class="h-full mr-4 drop-shadow-[0rem_0rem_0.2rem_#fff] rounded-lg"
              :src="anime.images.webp.image_url"
              :alt="anime.title"
            >
            <div class="p-4">
              <h2 class="mb-4 text-2xl font-semibold">
                {{ anime.title }}
              </h2>
              <div>{{ anime.synopsis ?? 'No description' }}</div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <VuePaginationTw
      v-if="state.pagination"
      v-model="state.pagination.page"
      class="pb-6"
      :total-items="state.pagination.total"
      :current-page="state.pagination.page"
      :per-page="state.pagination.perPage"
      border-active-color="border-red-500"
      border-text-active-color="text-red-500"
      @page-changed="onChange"
    />
  </div>
</template>
