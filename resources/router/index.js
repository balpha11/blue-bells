import { createRouter, createWebHistory } from 'vue-router';

// Import pages/components
import BlogPage from '../js/components/BlogPage.vue';
import ContactUsPage from '../js/components/ContactUsPage.vue';
import HomePage from '../js/components/HomePage.vue';
import MediaGalleryPage from '../js/components/MediaGalleryPage.vue';
import ProductsPage from '../js/components/ProductsPage.vue';
import ServicesPage from '../js/components/ServicesPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/contact', name: 'Contact', component: ContactUsPage },
  { path: '/media', name: 'MediaGallery', component: MediaGalleryPage },
  { path: '/blog', name: 'Blog', component: BlogPage },
  // Catch-all route for undefined paths – redirects to home
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
