import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './plugins/vuetify';
import router from './router';
import i18n from './plugins/i18n';
import { store, key } from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VCalendar from 'v-calendar';

createApp(App).use(store, key).use(VueAxios, axios).use(router).use(vuetify).use(VCalendar, {}).use(i18n).mount('#app');
