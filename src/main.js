import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import './registerServiceWorker'
import SwiperCore,{
    Autoplay,
    Pagination,
    Navigation
  } from 'swiper';
createApp(App).use(store).use(router).mount('#app')

SwiperCore.use([Autoplay, Pagination, Navigation]);

