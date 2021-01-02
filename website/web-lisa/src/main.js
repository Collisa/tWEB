import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import VueClickAway from "vue3-click-away";

createApp(App).use(router, VueClickAway).mount('#app');
