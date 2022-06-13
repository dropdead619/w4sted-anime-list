<script setup lang="ts">
import VuePaginationTw from 'vue-pagination-tw';
import { apiGET } from '@/api/jikanApiRequests';
import { debounce } from '@/utilities/debounce';
import { useAppStore } from '@/stores/app.store';

interface IPagination {
  page: number
  perPage: number
  total: number
}

const state = reactive({
  pagination: undefined as IPagination | undefined,
  searchInput: '',
  currentPage: 1,
});

const appStore = useAppStore();

const getTopAnimeList = async () => {
  const response = await apiGET(`top/anime?page=${appStore.currentPage}`);
  state.pagination = {
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
  state.pagination = {
    page: response.pagination.current_page,
    perPage: response.pagination.items.per_page,
    total: response.pagination.items.total,
  };
  appStore.data = response.data;
};

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

    <TitlesList :list="appStore.data" />
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
