<template>
    <section class="photo-showcase-section">
      <h1>Our Global Footprint in Pictures</h1>
      <p>Take a visual tour of our worldwide trading operations</p>
  
      <div class="photo-showcase">
        <!-- Vue Transition for fade effect -->
        <transition name="fade" mode="out-in">
          <img
            v-if="showcaseImages.length"
            :src="showcaseImages[currentShowcaseIndex].src"
            :alt="showcaseImages[currentShowcaseIndex].alt"
            :key="showcaseImages[currentShowcaseIndex].id"
            class="showcase-image"
          />
        </transition>
  
        <!-- Controls -->
        <div class="showcase-controls">
          <button @click="prevShowcaseImage">&lt;</button>
          <button @click="nextShowcaseImage">&gt;</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PhotoShowcase',
    data() {
      return {
        showcaseImages: [
          { id: 1, src: 'https://picsum.photos/800/400?random=1', alt: 'Global Warehouse' },
          { id: 2, src: 'https://picsum.photos/800/400?random=2', alt: 'Shipping Containers' },
          { id: 3, src: 'https://picsum.photos/800/400?random=3', alt: 'Exotic Spices' },
          { id: 4, src: 'https://picsum.photos/800/400?random=4', alt: 'Trading Port' }
        ],
        currentShowcaseIndex: 0
      };
    },
    methods: {
      nextShowcaseImage() {
        this.currentShowcaseIndex =
          (this.currentShowcaseIndex + 1) % this.showcaseImages.length;
      },
      prevShowcaseImage() {
        this.currentShowcaseIndex =
          (this.currentShowcaseIndex - 1 + this.showcaseImages.length)
          % this.showcaseImages.length;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Fade Transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  