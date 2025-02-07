<!-- src/views/MediaGalleryPage.vue -->
<template>
    <div>
      <!-- Navbar Component -->
      <Navbar />
  
      <!-- Media Gallery Content -->
      <section class="media-gallery-page">
        <div class="section-header fade-in">
          <h2>Media Gallery</h2>
          <p>Explore our collection of images and videos showcasing our work, products, and global presence.</p>
        </div>
        <div class="gallery-container">
          <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
            <img :src="item.image" :alt="item.alt" class="gallery-image" loading="lazy" />
            <div class="overlay">
              <div class="overlay-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer Component -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
  
  export default {
    name: 'MediaGalleryPage',
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        galleryItems: [
          {
            image: 'https://picsum.photos/400/300?random=1',
            alt: 'Global Trading',
            title: 'Global Trading',
            description: 'Our team in action, facilitating international trade.',
          },
          {
            image: 'https://picsum.photos/400/300?random=2',
            alt: 'Product Distribution',
            title: 'Product Distribution',
            description: 'Efficient distribution of high-quality products worldwide.',
          },
          {
            image: 'https://picsum.photos/400/300?random=3',
            alt: 'Market Analysis',
            title: 'Market Analysis',
            description: 'In-depth market research to drive strategic decisions.',
          },
          {
            image: 'https://picsum.photos/400/300?random=4',
            alt: 'Consulting Services',
            title: 'Consulting Services',
            description: 'Expert guidance for navigating international trade regulations.',
          },
          {
            image: 'https://picsum.photos/400/300?random=5',
            alt: 'Raw Cashew Nuts',
            title: 'Raw Cashew Nuts',
            description: 'Premium quality raw cashew nuts ready for export.',
          },
          {
            image: 'https://picsum.photos/400/300?random=6',
            alt: 'Almonds',
            title: 'Almonds',
            description: 'High-grade almonds sourced from the best farms.',
          },
          {
            image: 'https://picsum.photos/400/300?random=7',
            alt: 'Vanilla',
            title: 'Vanilla',
            description: 'Pure vanilla beans for global markets.',
          },
          {
            image: 'https://picsum.photos/400/300?random=8',
            alt: 'Cocoa',
            title: 'Cocoa',
            description: 'Finest cocoa beans for chocolate production.',
          },
          {
            image: 'https://picsum.photos/400/300?random=9',
            alt: 'Spices',
            title: 'Spices',
            description: 'Aromatic spices from around the world.',
          },
          {
            image: 'https://picsum.photos/400/300?random=10',
            alt: 'Sesame Seeds',
            title: 'Sesame Seeds',
            description: 'Nutrient-rich sesame seeds for export.',
          },
          {
            image: 'https://picsum.photos/400/300?random=11',
            alt: 'Coffee Beans',
            title: 'Coffee Beans',
            description: 'Premium coffee beans sourced from sustainable farms.',
          },
          {
            image: 'https://picsum.photos/400/300?random=12',
            alt: 'Tea Leaves',
            title: 'Tea Leaves',
            description: 'Finest tea leaves for global distribution.',
          },
          {
            image: 'https://picsum.photos/400/300?random=13',
            alt: 'Rice Exports',
            title: 'Rice Exports',
            description: 'High-quality rice for international markets.',
          },
          {
            image: 'https://picsum.photos/400/300?random=14',
            alt: 'Wheat Grains',
            title: 'Wheat Grains',
            description: 'Nutritious wheat grains for global trade.',
          },
          {
            image: 'https://picsum.photos/400/300?random=15',
            alt: 'Honey Production',
            title: 'Honey Production',
            description: 'Pure honey from natural beekeeping practices.',
          },
          {
            image: 'https://picsum.photos/400/300?random=16',
            alt: 'Olive Oil',
            title: 'Olive Oil',
            description: 'Premium olive oil for culinary excellence.',
          },
          {
            image: 'https://picsum.photos/400/300?random=17',
            alt: 'Dried Fruits',
            title: 'Dried Fruits',
            description: 'Healthy and delicious dried fruits for export.',
          },
          {
            image: 'https://picsum.photos/400/300?random=18',
            alt: 'Herbal Products',
            title: 'Herbal Products',
            description: 'Natural herbal products for wellness.',
          },
          {
            image: 'https://picsum.photos/400/300?random=19',
            alt: 'Seafood Exports',
            title: 'Seafood Exports',
            description: 'Fresh seafood for global markets.',
          },
          {
            image: 'https://picsum.photos/400/300?random=20',
            alt: 'Organic Vegetables',
            title: 'Organic Vegetables',
            description: 'Farm-fresh organic vegetables for export.',
          },
          {
            image: 'https://picsum.photos/400/300?random=21',
            alt: 'Floral Exports',
            title: 'Floral Exports',
            description: 'Beautiful flowers for international markets.',
          },
          {
            image: 'https://picsum.photos/400/300?random=22',
            alt: 'Timber Products',
            title: 'Timber Products',
            description: 'Sustainable timber for construction and furniture.',
          },
        ],
      };
    },
    mounted() {
      this.initAnimations();
    },
    methods: {
      initAnimations() {
        const sections = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        sections.forEach((section) => {
          observer.observe(section);
        });
      },
    },
  };
  </script>
  
  
  