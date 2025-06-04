<template>
  <nav class="navbar">
    <button class="menu-toggle" aria-label="Toggle navigation" @click="toggleMenu">
      Menu
    </button>
    <ul :class="{ open: isOpen }">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  padding: 1rem;
}


.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
}

.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .menu-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
    flex-direction: column;
  }

  .navbar ul.open {
    display: flex;
  }
}
</style>
