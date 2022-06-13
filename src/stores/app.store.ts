import { defineStore } from 'pinia';
import type { AnimeTitle } from '@/config/types';

export const useAppStore = defineStore('app', {
  state: () => (
    {
      data: null as null | AnimeTitle[],
      currentPage: 1,
    }
  ),
},
);
