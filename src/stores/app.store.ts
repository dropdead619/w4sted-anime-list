import { defineStore } from 'pinia';
import type { AnimeTitle, IPagination } from '@/config/types';

export const useAppStore = defineStore('app', {
  state: () => (
    {
      data: null as null | AnimeTitle[],
      pagination: null as null | IPagination,
      currentPage: 1,
    }
  ),
},
);
