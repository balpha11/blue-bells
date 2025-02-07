<!-- src/views/ProductsPage.vue -->
<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Hero Section -->
    <section class="products-hero">
      <div class="hero-content">
        <h1 class="text-light">Explore Our Global Range of Products</h1>
        <p>
          From raw materials to finished goods, Blue Bells offers 
          an extensive selection of high-quality products sourced 
          from trusted partners worldwide.
        </p>
        <button class="btn btn-primary" @click="scrollToProducts">View Products</button>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="products-intro">
      <div class="intro-text">
        <h2>Why Choose Our Products</h2>
        <p>
          At Blue Bells, our commitment to quality is unmatched. We carefully 
          select and verify suppliers to ensure our customers receive top-grade 
          materials and goods every time. Whether you’re seeking exotic 
          commodities, essential raw ingredients, or specialty items, we cater 
          to diverse business needs across the globe.
        </p>
      </div>
      <div class="intro-image">
        <img 
          src="https://picsum.photos/600/400?random=20" 
          alt="Products Introduction" 
          class="img-fluid rounded shadow"
        />
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products">
      <h2>Featured Products</h2>
      <p class="featured-desc">
        Our best-selling and most sought-after items from around the world.
      </p>
      <div class="featured-grid">
        <div class="featured-card" v-for="(product, index) in featuredProducts" :key="index">
          <img :src="product.image" :alt="product.name" />
          <div class="featured-details">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Products Section -->
    <section class="products-page" id="productsSection">
      <div class="section-header">
        <h2>Our Full Product Range</h2>
        <p>
          Explore the variety of high-quality products we offer to 
          our customers around the world.
        </p>
      </div>

      <div class="products-container">
        <!-- Product Categories or Filters -->
        <div class="category-filters">
          <button 
            class="btn btn-outline-primary me-2 mb-2" 
            @click="filterCategory('all')"
            :class="{ active: category === 'all' }"
          >
            All
          </button>
          <button 
            class="btn btn-outline-primary me-2 mb-2" 
            @click="filterCategory('food')"
            :class="{ active: category === 'food' }"
          >
            Food &amp; Commodities
          </button>
          <button 
            class="btn btn-outline-primary me-2 mb-2" 
            @click="filterCategory('raw')"
            :class="{ active: category === 'raw' }"
          >
            Raw Materials
          </button>
          <button 
            class="btn btn-outline-primary me-2 mb-2" 
            @click="filterCategory('specialty')"
            :class="{ active: category === 'specialty' }"
          >
            Specialty Items
          </button>
        </div>

        <!-- Product Grid -->
        <div class="products-grid">
          <div
            v-for="(product, index) in filteredProducts"
            :key="index"
            class="product-card"
            :style="{ backgroundImage: 'url(' + product.image + ')' }"
          >
            <div class="product-name">{{ product.name }}</div>
          </div>
        </div>

        <router-link to="/products" class="view-all btn btn-outline-primary mt-4">View All Products</router-link>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="products-cta">
      <h2>Want to Learn More About Our Product Line?</h2>
      <p>
        Our dedicated team is always here to provide additional 
        details or assist you in placing an order.
      </p>
      <router-link to="/contact" class="cta-button btn btn-primary">Contact Us</router-link>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ProductsPage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      category: 'all',
      products: [
        {
          name: 'Raw Cashew Nuts',
          category: 'raw',
          image: 'https://picsum.photos/300/200?random=1',
        },
        {
          name: 'Almonds',
          category: 'raw',
          image: 'https://picsum.photos/300/200?random=2',
        },
        {
          name: 'Vanilla',
          category: 'food',
          image: 'https://picsum.photos/300/200?random=3',
        },
        {
          name: 'Cocoa',
          category: 'food',
          image: 'https://picsum.photos/300/200?random=4',
        },
        {
          name: 'Cashew Kernels',
          category: 'raw',
          image: 'https://picsum.photos/300/200?random=5',
        },
        {
          name: 'Macadamia Nut',
          category: 'raw',
          image: 'https://picsum.photos/300/200?random=6',
        },
        {
          name: 'Spices',
          category: 'food',
          image: 'https://picsum.photos/300/200?random=7',
        },
        {
          name: 'General Trading',
          category: 'specialty',
          image: 'https://picsum.photos/300/200?random=8',
        },
        {
          name: 'Sesame Seed',
          category: 'food',
          image: 'https://picsum.photos/300/200?random=9',
        },
        {
          name: 'ICUMSA 45 Sugar',
          category: 'food',
          image: 'https://picsum.photos/300/200?random=10',
        },
        // Add more product objects here...
      ],
      featuredProducts: [
        {
          name: 'Exotic Spices',
          description: 'Elevate your dishes with our premium-grade selection of spices.',
          image: 'https://picsum.photos/400/300?random=11',
        },
        {
          name: 'Organic Nuts',
          description: 'High-quality, ethically sourced nuts perfect for snacking or baking.',
          image: 'https://picsum.photos/400/300?random=12',
        },
        {
          name: 'Specialty Grains',
          description: 'Discover our diverse range of grains carefully grown and harvested from fertile regions.',
          image: 'https://picsum.photos/400/300?random=13',
        },
        // Add more featured products as needed...
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.category === 'all') {
        return this.products;
      }
      return this.products.filter(product => product.category === this.category);
    },
  },
  methods: {
    filterCategory(selected) {
      this.category = selected;
    },
    scrollToProducts() {
      const productsSection = document.getElementById('productsSection');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
/* Hero Section */

</style>
