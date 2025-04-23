<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script setup lang="ts">
// Navigation logic can be added here
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  padding: 1rem;
}

.navbar a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

.navbar a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
