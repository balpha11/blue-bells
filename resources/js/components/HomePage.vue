<!-- src/views/HomePage.vue -->
<template>
    <div>
        <!-- Navbar Component -->
        <Navbar />

        <!-- Hero Section -->
        <section class="hero" id="hero">
            <div class="container ">
                <h1 class="text-light font-bold  " >Welcome to Blue Bells!</h1>
                <p >
                    At Blue Bells, we connect businesses with worldwide opportunities
                    in the import &amp; export industry. Our comprehensive global network
                    and innovative solutions ensure seamless cross-border transactions,
                    empowering you to expand into new markets with confidence.
                </p>
                <button class="btn btn-primary" @click="getStarted">Get Started</button>
            </div>
        </section>

        <!-- Consulting Section -->
        <section class="consulting-section">
            <div class="container">
                <h1 class="text-center">Who We Are</h1>
                <div class="headline mt-5 ">Driving Success Through Innovation and Collaboration</div>
                <div class="row rowcard mt-5 ">
                    <div class="col-lg-6">
                        <p>
                            At Blue Bells, we go beyond expectations to deliver innovative solutions
                            that exceed project goals. Our employee-owned culture fosters collaboration,
                            ensuring your vision stays at the forefront.
                        </p>
                        <p class="highlight">
                            100% Employee-Owned. Driven by Excellence.
                        </p>
                        <p>
                            Partnering with Blue Bells means working with a trusted network
                            of experts dedicated to achieving sustainable and cutting-edge
                            results across industries worldwide.
                        </p>
                        <p>
                            Together, we find smarter solutions, build lasting partnerships,
                            and help elevate your success.
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <div class="image-content ">
                            <!-- Dummy Image -->
                            <img src="https://wallpaperaccess.com/full/1911991.jpg" alt="Blue Bells Project Image"
                                class="img-fluid rounded rounded shadow " />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- why-choose-us -->
        <section class="why-choose-us">
            <div class="container">
                <h1 class="mb-5">Why Choose Blue Bells</h1>
                <p>
                Our passion for excellence, dedication to quality, and commitment to customer success set us apart. Whether you need guidance on navigating complex customs regulations or want to source top-notch products worldwide, Blue Bells has you covered.
                </p>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id="cardContainer">
                    <div class="col">
                        <div class="card h-100">
                            <div class="image-container p-3">
                                <img src="https://omentrin.sirv.com/WP_livedemo.website/2020/01/global-reach.jpg" class="img-fluid rounded" alt="Global Reach">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title text-primary">Global Reach</h4>
                                <p class="card-text">Our extensive network spans multiple continents, enabling efficient import and export solutions regardless of your location.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div class="image-container p-3">
                                <img src="https://i.pinimg.com/736x/59/d1/c0/59d1c0b2983b4cd709d7ea07aad60191.jpg" class="img-fluid rounded" alt="Expert Guidance">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title text-primary">Expert Guidance</h4>
                                <p class="card-text">From negotiations to logistics, our seasoned consultants offer tailored advice to streamline your international trade operations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div class="image-container p-3">
                                <img src="https://static.vecteezy.com/system/resources/previews/021/869/195/large_2x/transportation-and-logistic-import-export-and-transport-industry-of-truck-container-cargo-ship-generative-ai-free-photo.JPG" class="img-fluid rounded" alt="Customized Solutions">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title text-primary">Customized Solutions</h4>
                                <p class="card-text">We understand that every business is unique. Our team crafts personalized strategies to fit your specific goals and budget.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div class="image-container p-3">
                                <img src="https://www.transcocargo.com.au/wp-content/uploads/2024/05/Finding-Reliable-Suppliers-Buyers-for-Import-Export-Business.jpg" class="img-fluid rounded" alt="Reliable Support">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title text-primary">Reliable Support</h4>
                                <p class="card-text">We prioritize long-term relationships. Count on us for prompt support and updates at each stage of the trading process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        
        <!-- Our Services Section -->

        
        <section id="services" class="services-container">
        <div class="container">
            <h1>Blue Bells Services</h1>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="grid-container">
                            <div class="left-content">
                                <h1 class="text-primary">
                                     Import Export 
                                    </h1>
                                <p>Blue Bells is involved in the import-export of a wide variety of
                                    foods and commodities, ensuring swift, safe, and efficient deliveries.</p>
                                <button class="btn-explore"> Explore
                                </button>
                            </div>
                            <img src="https://wallpaperaccess.com/full/4729551.jpg" alt="Cappadocia">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="grid-container">
                            <div class="left-content">
                                <h1 class="text-primary">Products Distribution</h1>
                                <p>We assist businesses in worldwide sourcing, delivery, and
                                    commodity valuation analysis to maximize their market advantage.</p>
                                <button class="btn-explore">Explore</button>
                            </div>
                            <img src="https://img.pikbest.com/wp/202405/import-and-export-3d-rendering-of-a-logistics-company-s-shipping-operation_9844070.jpg%21bw700" alt="Santorini">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="grid-container">
                            <div class="left-content">
                                <h1 class="text-primary">Market Analysis</h1>
                                <p>Our experts provide valuable insights and data-driven
                                    perspectives to facilitate informed and strategic business decisions.</p>
                                <button class="btn-explore">Explore</button>
                            </div>
                            <img src="https://img.freepik.com/premium-photo/aerial-view-container-ship-with-business-graph-analysis-global-business-import-export-logistic_1048944-19107741.jpg">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="grid-container">
                            <div class="left-content">
                                <h1 class="text-primary">International Business Consulting</h1>
                                <p>Navigating foreign regulations can be daunting. We guide you
                                through policies, legalities, and cultural nuances for a smooth
                                international setup.</p>
                                <button class="btn-explore">Explore</button>
                            </div>
                            <img src="https://wallpapercave.com/wp/wp6888650.jpg" alt="International Business Consulting">
                        </div>
                    </div>
                </div>
                
                <div class="carousel-indicators  ">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class=" button active"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" class="button"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" class="button" ></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" class="button"></button>
                </div>
            </div>
        </div>
    </section>



<!-- /************************** 
    product section
***************************/ -->

    <section id="products" class="products-container">
            <div class="container">
                <h1>Our Products</h1>
                <div class="title-line mx-auto mb-4"></div>
                <div class="row g-4">
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=21');">
                            Raw Cashew Nuts
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=22');">
                            Almonds
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=23');">
                            Vanilla
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=24');">
                            Cocoa
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=25');">
                            Cashew Kernels
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=26');">
                            Macadamia Nut
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=27');">
                            Spices
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=28');">
                            General Trading
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=29');">
                            Sesame Seed
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=20');">
                            ICUMSA 45 Sugar
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=3');">
                            PEPER
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card text-center d-flex align-items-center justify-content-center"
                            style="background-image: url('https://picsum.photos/300/200?random=32');">
                            PEANUTS
                        </div>
                    </div>
                </div>
                <div class=" viewallbtn">
                <a href="" class="view-all btn btn-outline-primary mt-4">
                <router-link to="/products" class="nav-link"> View All..</router-link>
                  </a>
                </div>
            </div>
    </section>


    <!-- what our client say -->


    <section class="testimonials-section ">
        <div class="testinomial-container">
            <h1 >What Our Clients Say</h1>
            <!-- Google Rating -->
             <div class="google-rating mt-5  ">
                <div class="col">
                    <img src="https://pngimg.com/uploads/google/google_PNG19644.png" alt="Google Logo">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="review-count">55 reviews</span>
                </div>
                <!-- Write Review Button -->
                 <div class="col"> 
                    <button class="write-review ">Write a Review</button>
                 </div>
                 
            </div>
            <div id="testimonialsCarousel" class="carousel slide gogle  md " data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <!-- Removed duplicate carousel-inner -->
                     <div class="carousel-item active">

                        <div class="row">

                            <div class="col-md-6 col-lg-3">
                                <div class="testimonial-card">
                                    <p>"I feel so empowered whenever I come to the gym. Troy and the trainers created an amazing atmosphere!"</p>
                                    <div class="profile-info">
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Mikhail">
                                        <div class="profile-text">
                                             <strong>Mikhail Joshua Whitton</strong><br>
                                             <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                             <small>4 months ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="testimonial-card">
                                    <p>"A really great gym with awesome instructors who are constantly keeping you in check!"</p>
                                    <div class="profile-info">
                                        <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Melanie">
                                        <div class="profile-text">
                                            <strong>Melanie Giandzi</strong><br>
                                            <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                            <small>6 months ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="testimonial-card">
                                    <p>"I started the winter warrior challenge with Vale Tudo - finishing off week 3 today."</p>
                                    <div class="profile-info">
                                        <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Hayley">
                                        <div class="profile-text">
                                            <strong>Hayley Shumack</strong><br>
                                            <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                            <small>11 months ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="testimonial-card">
                                    <p>"Great training with the best trainers!"</p>
                                    <div class="profile-info">
                                        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Che">
                                        <div class="profile-text">
                                            <strong>Che Hyslop</strong><br>
                                            <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                            <small>11 months ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                     <div class="carousel-inner">
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-6 col-lg-3">
                                    <div class="testimonial-card">
                                        <p>"An amazing place to train! The trainers are very supportive and push you to your best."</p>
                                        <div class="profile-info">
                                            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="James">
                                            <div class="profile-text">
                                                <strong>James Walker</strong><br>
                                                <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                                <small>2 months ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="testimonial-card">
                                        <p>"A fantastic experience! I've learned so much and feel stronger and healthier than ever."</p>
                                        <div class="profile-info">
                                            <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="Sophia">
                                            <div class="profile-text">
                                                <strong>Sophia Martinez</strong><br>
                                                <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                                <small>5 months ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="testimonial-card">
                                        <p>"The best gym I've ever been to. Great atmosphere, top-notch facilities, and motivating trainers!"</p>
                                        <div class="profile-info">
                                            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Ethan">
                                            <div class="profile-text">
                                                <strong>Ethan Johnson</strong><br>
                                                <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                                <small>7 months ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3">
                                    <div class="testimonial-card">
                                        <p>"Absolutely love this gym! The environment is friendly, and the trainers are incredibly knowledgeable."</p>
                                        <div class="profile-info">
                                            <img src="https://randomuser.me/api/portraits/women/40.jpg" alt="Emma">
                                            <div class="profile-text">
                                                <strong>Emma Roberts</strong><br>
                                                <span class="stars">⭐⭐⭐⭐⭐</span><br>
                                                <small>1 month ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Carousel Indicators (Fixed) -->
                 <div class="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1"></button>
                
                </div>
            </div>
        </div>
    </section>

        <!-- Contact Form Section -->


    <section id="contact" class="contact-section">
        <div class="container">
            <div class="mb-5">
                <h1 class="mb-5" >Get in Touch with Us</h1>
            </div>
            
            <div class="row align-items-center pt-5">
                <!-- Left Side: Contact Form -->
                <div class="col-lg-5 pt-5">
                    <div class="contact-form">
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" id="name" v-model="contact.name" class="form-control"
                                placeholder="Enter your name" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" v-model="contact.email" class="form-control"
                                placeholder="Enter your email address" required />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" v-model="contact.message" class="form-control"
                                placeholder="Write your message here" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>

                <!-- Right Side: Contact Info -->
                <div class="col-lg-3 text-center text-lg-start ">
                    <h3>We'd love to hear from you! Feel free to reach out for any inquiries, feedback, or assistance.</h3>
                </div>
            </div>
        </div>
    </section>


        <!-- Back to Top Button -->
        <button v-if="showBackToTop" class="back-to-top btn btn-primary" @click="scrollToTop">
            ↑ Top
        </button>
        <!-- Footer Component -->
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import PhotoShowcase from '@/components/PhotoShowcase.vue'; // Ensure the path is correct

export default {
    name: 'HomePage',

    components: {
        Navbar,
        Footer,
        PhotoShowcase, // Registering PhotoShowcase component
    },

    data() {
        return {
            contact: {
                name: '',
                email: '',
                message: ''
            },
            showBackToTop: false
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        getStarted() {
            alert('Thank you for your interest! We will guide you through the next steps.');
        },
        submitForm() {
            console.log('Form submitted:', this.contact);
            alert('Thank you for contacting us! We will get back to you shortly.');
            // Reset form fields
            this.contact.name = '';
            this.contact.email = '';
            this.contact.message = '';
        },
        handleScroll() {
            // Show back-to-top button after scrolling ~300px
            this.showBackToTop = window.scrollY > 300;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};

</script>


