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
import router from '../router'; // Ensure this path is correct based on your project structure

const app = createApp(App);

// Tell Vue to use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
