<!-- src/views/ContactUsPage.vue -->
<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-content">
        <h1>Contact Blue Bells</h1>
        <p>
          We're always here to assist you. Let's work together to help your 
          business thrive in global trade!
        </p>
        <button class="btn btn-primary" @click="learnMore" aria-label="Learn More About Our Services">
          Learn More
        </button>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="contact-intro">
      <div class="intro-text">
        <h2>How Can We Help You Today?</h2>
        <p>
          From inquiries about our global product range to requests for 
          custom import-export strategies, our team is ready to assist. 
          Please reach out through the form below or via email, and we 
          will get back to you as soon as possible.
        </p>
      </div>
      <div class="intro-image">
        <img 
          src="https://picsum.photos/600/400?random=30" 
          alt="Contact Introduction" 
          class="img-fluid rounded shadow"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-us-page">
      <div class="section-header">
        <h2>Get in Touch</h2>
        <p>We're here to help! Reach out with any questions or inquiries.</p>
      </div>

      <div class="contact-container">
        <!-- Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="contact.name"
                placeholder="Enter your name"
                required
                aria-required="true"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="contact.email"
                placeholder="Enter your email address"
                required
                aria-required="true"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="contact.subject"
                placeholder="Enter the subject"
                required
                aria-required="true"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="contact.message"
                placeholder="Write your message here"
                rows="5"
                required
                aria-required="true"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" aria-label="Send Message">Send Message</button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="contact-info ">
          <h3>Our Contact Information</h3>
          <p><strong>Email:</strong> info@bluebells.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Trading St, Commerce City</p>
          <h3>Business Hours</h3>
          <p>
            Monday - Friday: 9am - 6pm<br />
            Saturday: 10am - 2pm<br />
            Sunday: Closed
          </p>
          <h3>Follow Us</h3>
          <div class="social-icons ">
                        <a href="#"><i class="fab fa-facebook "></i></a>
                        <a class="twitter" href="#"><i class="bi bi-twitter-x"></i></a>
                        <a class="youtube" href="#"><i class="fab fa-youtube"></i></a>
                        <a  class="whatsapp"href="#"><i class="fab fa-whatsapp"></i></a>
                        <a class="insta" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
        </div>
      </div>
    </section>

    <!-- Map / Additional Info Section -->
    <section class="map-section">
      <h2>Visit Our Office</h2>
      <p>We welcome you to stop by and discuss your trading needs in person.</p>
      <!-- Example of a map embed (replace with your own or remove if not needed) -->
      <div class="map-container">
        <iframe
          width="100%"
          height="300"
          style="border:0;"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160826707!2d72.74110158419827!3d19.082197839222596!2m3!1f0!2f0!3f0!3m2
          !1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62cbd5b7cb1%3A0xcebc1be3ab5122ba!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1650429318594!5m2!1sen!2sus"
        ></iframe>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="contact-cta">
      <h2>Ready to Expand Your Global Reach?</h2>
      <p>
        Our experts are here to provide tailored import-export 
        strategies, product sourcing advice, and more. Let’s talk!
      </p>
      <router-link to="/services" class="cta-button btn btn-primary" aria-label="Explore Our Services">
        Explore Our Services
      </router-link>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ContactUsPage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    submitForm() {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', this.contact);
      alert('Thank you for contacting us!');
      // Reset form fields
      this.contact.name = '';
      this.contact.email = '';
      this.contact.subject = '';
      this.contact.message = '';
    },
    learnMore() {
      alert('Learn more about how we can assist your business!');
    }
  }
};
</script>

<style scoped>
/* Hero Section */

</style>
