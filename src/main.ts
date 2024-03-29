import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createMetaManager } from 'vue-meta';
import App from './App.vue';

import './style/index.css';
import 'vue-pagination-tw/styles';

import router from './router';
import '@/router/before-each-guard';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(createMetaManager());
app.mount('#app');
