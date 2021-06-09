import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase';

console.log('DB:', db);

createApp(App).use(router).mount('#app');
