// src/app.js

import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap CSS and JS
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/app.css';

// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Vue Router
import router from '../router'; // Ensure the path is correct

const app = createApp(App);

// Use Vue Router
app.use(router);

// Mount the Vue app
app.mount('#app');
