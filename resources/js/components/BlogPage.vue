<!-- src/pages/BlogPage.vue -->
<template>
    <div>
      <!-- Navbar Component -->
      <Navbar />
  
      <!-- Blog Content -->
      <section class="blog-page">
        <div class="section-header fade-in">
          <h2>Insights & Updates</h2>
          <p class="subtitle">
            Discover the latest trends and expert perspectives in global trade
          </p>
        </div>
  
        <div class="blog-posts">
          <article
            class="blog-post fade-in"
            v-for="(post, index) in posts"
            :key="post.id"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="post-image">
              <img :src="post.image" :alt="post.title" class="hover-zoom img-fluid" loading="lazy" />
              <div class="post-category">{{ post.category }}</div>
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">{{ post.date }}</span>
                <span class="read-time">{{ post.readTime }}</span>
              </div>
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <router-link :to="`/blog/${post.id}`" class="read-more" aria-label="Continue Reading">
                Continue Reading
                <svg class="arrow-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </router-link>
            </div>
          </article>
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
    name: 'BlogPage',
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Navigating Post-Pandemic Global Trade',
            excerpt:
              'Explore how international trade dynamics have shifted in the new normal and strategies for adapting your business.',
            category: 'Trade Analysis',
            date: 'March 15, 2023',
            readTime: '5 min read',
            image: 'https://picsum.photos/600/400?random=1',
          },
          {
            id: 2,
            title: 'Sustainable Supply Chain Management',
            excerpt:
              'Learn about eco-friendly practices transforming modern logistics and how to implement them effectively.',
            category: 'Sustainability',
            date: 'March 12, 2023',
            readTime: '4 min read',
            image: 'https://picsum.photos/600/400?random=2',
          },
          {
            id: 3,
            title: 'Emerging Markets in 2023',
            excerpt:
              'Discover the top 10 emerging markets offering new opportunities for global trade expansion this year.',
            category: 'Market Trends',
            date: 'March 10, 2023',
            readTime: '6 min read',
            image: 'https://picsum.photos/600/400?random=3',
          },
          {
            id: 4,
            title: 'Digital Transformation in Logistics',
            excerpt:
              'How blockchain and AI are revolutionizing supply chain management and international shipping.',
            category: 'Technology',
            date: 'March 8, 2023',
            readTime: '5 min read',
            image: 'https://picsum.photos/600/400?random=4',
          },
          // Add more posts as needed
        ],
      };
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
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
    metaInfo: {
      title: 'Blog - Blue Bells International',
      meta: [
        {
          name: 'description',
          content:
            'Read the latest insights, trends, and expert perspectives on global trade, sustainability, technology, and more from Blue Bells International.',
        },
        {
          property: 'og:title',
          content: 'Blog - Blue Bells International',
        },
        {
          property: 'og:description',
          content:
            'Read the latest insights, trends, and expert perspectives on global trade, sustainability, technology, and more from Blue Bells International.',
        },
        {
          property: 'og:image',
          content: 'https://picsum.photos/1200/630?random=5', // Example image for social sharing
        },
        // Add more meta tags as needed
      ],
    },
  };
  </script>
  

  