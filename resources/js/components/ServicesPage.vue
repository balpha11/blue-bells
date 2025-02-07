<!-- E:/WORK/bluebells/blue-bells/resources/js/components/ServicesPage.vue -->
<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Hero Section for Services -->
    <section class="services-hero">
      <div class="hero-content">
        <h1>Discover Our Comprehensive Services</h1>
        <p>
          From global sourcing to secure distribution, we offer 
          a wide range of solutions tailored to your international 
          trading needs.
        </p>
        <button class="btn btn-primary" @click="learnMore">Learn More</button>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="services-intro">
      <div class="intro-text">
        <h2>Empowering Your Business</h2>
        <p>
          At Blue Bells, our mission is to equip businesses with the 
          resources and expertise necessary to thrive in a global market. 
          With our diverse service offerings, we ensure that every 
          step of your import/export journey is efficient, transparent, 
          and profitable.
        </p>
      </div>
      <div class="intro-image">
        <img 
          src="https://picsum.photos/600/400?random=1" 
          alt="International Services Overview"
        />
      </div>
    </section>

    <!-- Main Content for Services -->
    <section class="services-page">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>
          Explore the wide range of services we offer to cater to 
          your international trading needs.
        </p>
      </div>
      <div class="services-container">
  <div class="services">
    <div class="service-card">
      <div class="image-container">
        <img src="https://picsum.photos/100/100?random=2" alt="Import Export Icon" />
      </div>
      <h3>Import Export</h3>
      <p>
        We facilitate the import and export of a variety of products globally, ensuring consistent quality and reliability.
      </p>
    </div>
    <div class="service-card">
      <div class="image-container">
        <img src="https://picsum.photos/100/100?random=3" alt="Products Distribution Icon" />
      </div>
      <h3>Products Distribution</h3>
      <p>
        Our distribution network spans the globe, ensuring timely and efficient delivery of goods to your desired markets.
      </p>
    </div>
    <div class="service-card">
      <div class="image-container">
        <img src="https://picsum.photos/100/100?random=4" alt="Market Analysis Icon" />
      </div>
      <h3>Market Analysis</h3>
      <p>
        Stay competitive with our detailed insights, trends, and data-driven reports covering international markets.
      </p>
    </div>
    <div class="service-card">
      <div class="image-container">
        <img src="https://picsum.photos/100/100?random=5" alt="International Business Consulting Icon" />
      </div>
      <h3>Business Consulting</h3>
      <p>
        Our experts guide you through complex regulations, logistical challenges, and strategic planning for optimal global operations.
      </p>
    </div>
  </div>
</div>


    </section>

    <!-- Our Approach Section -->
    <section class="our-approach-section">
      <h2>Our Approach</h2>
      <div class="approach-content">
        <div class="approach-box">
          <h3>1. Consultation &amp; Strategy</h3>
          <p>
            We begin by understanding your unique business 
            objectives and challenges. Our consultants then 
            craft a tailored import-export strategy to align 
            with your goals.
          </p>
        </div>
        <div class="approach-box">
          <h3>2. Streamlined Operations</h3>
          <p>
            From documentation to shipping logistics, we handle 
            every step with clarity and efficiency, minimizing 
            delays and ensuring compliance with local regulations.
          </p>
        </div>
        <div class="approach-box">
          <h3>3. Ongoing Support</h3>
          <p>
            Our team remains at your service post-deployment, 
            offering continuous market insights, cost optimization, 
            and solutions for new market expansions.
          </p>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="services-cta">
      <h2>Ready to Take Your Business Global?</h2>
      <p>
        Discover how our robust suite of services can help you expand 
        into new markets with confidence. Let's discuss your needs 
        and chart a path to success together.
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
  name: 'ServicesPage',
  components: {
    Navbar,
    Footer,
  },
  methods: {
    learnMore() {
      alert('Learn more about our comprehensive services!');
    }
  }
}
</script>

<!-- Removed the <style scoped> section -->
