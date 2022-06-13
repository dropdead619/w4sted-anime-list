<script setup lang="ts">
import VuePaginationTw from 'vue-pagination-tw';
import { apiGET } from '@/api/jikanApiRequests';
import { debounce } from '@/utilities/debounce';
import { useAppStore } from '@/stores/app.store';

const state = reactive({
  searchInput: '',
});

const appStore = useAppStore();

const getTopAnimeList = async () => {
  const response = await apiGET(`top/anime?page=${appStore.currentPage}`);
  appStore.pagination = {
    page: response.pagination.current_page,
    perPage: response.pagination.items.per_page,
    total: response.pagination.items.total,
  };
  appStore.data = response.data;
};

const getAnimeListByName = async (name: string, page?: number) => {
  const response = await apiGET(`anime?${new URLSearchParams({
    q: name,
    page: page?.toString() ?? '1',
  })}`);
  appStore.pagination = {
    page: response.pagination.current_page,
    perPage: response.pagination.items.per_page,
    total: response.pagination.items.total,
  };
  appStore.data = response.data;
};

if (!appStore.data)
  getTopAnimeList();

const onChange = (page: number) => {
  appStore.currentPage = page;
  getTopAnimeList();
};

const onSearch = debounce((e: Event) => {
  getAnimeListByName((e.target as HTMLInputElement).value);
});
</script>

<template>
  <div class="container m-auto">
    <div class="mt-11">
      <BaseInput
        v-model="state.searchInput"
        label="Search for anime titles:"
        class="w-2/5 mt-2"
        placeholder="Elfen lied..."
        @input="onSearch"
      />
    </div>

    <TitlesList
      v-if="appStore.data?.length"
      class="max-w-6xl"
      :list="appStore.data"
    />
    <template v-else>
      <div class="mx-auto mt-12 flex flex-col items-center">
        <img
          class="max-w-xl drop-shadow-[0rem_0rem_0.7rem_#fff] mb-12"
          src="../../assets/nothing-to-show.webp"
          alt="Not found"
        >
        <div class="text-5xl">
          No results...
        </div>
      </div>
    </template>

    <VuePaginationTw
      v-if="appStore.pagination && appStore.data?.length"
      v-model="appStore.pagination.page"
      class="pb-6"
      :total-items="appStore.pagination.total"
      :current-page="appStore.pagination.page"
      :per-page="appStore.pagination.perPage"
      border-active-color="border-red-500"
      border-text-active-color="text-red-500"
      @page-changed="onChange"
    />
  </div>
</template>
