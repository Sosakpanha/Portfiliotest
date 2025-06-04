<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-heading">Welcome to My Portfolio</h1>
      <p class="hero-subheading">Frontend Developer & Designer</p>
    </div>
    <div class="hero-animation" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'

const { $gsap } = getCurrentInstance()!.appContext.config.globalProperties

onMounted(() => {
  $gsap.from('.hero-heading', { opacity: 0, y: -30, duration: 0.6 })
  $gsap.from('.hero-subheading', { opacity: 0, y: -30, duration: 0.6, delay: 0.3 })
})
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-animation {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
