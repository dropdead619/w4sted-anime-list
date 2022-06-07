<script setup lang="ts">
import { apiGET } from '@/api/jikanApiRequests';
apiGET('top/anime').then(res => console.log(res));
</script>

<template>
  <div>
    TITLES
  </div>
</template>
