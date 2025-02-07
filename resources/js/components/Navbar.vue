<template>
  <nav class="navbar navbar-expand-lg navbar-dark    fixed-top">
    <div class="container-fluid">
      <!-- Brand / Logo (using Vue Router) -->
      <router-link class="navbar-brand" to="/">Blue Bells</router-link>

      <!-- Toggler (Hamburger) button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Nav Links -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto text-tertiary mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">SERVICES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">CONTACT US</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/media" class="nav-link">MEDIA GALLERY</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">BLOG</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.nav-link {
  color: rgb(255, 255, 255) !important;
}

.nav-link:hover {
  color: #000000;
  text-decoration: underline; /* Optional hover effect */
}
</style>
