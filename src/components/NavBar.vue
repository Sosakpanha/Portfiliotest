<template>
  <nav class="navbar">
    <button
      class="menu-toggle"
      aria-label="Toggle navigation"
      :aria-expanded="isOpen.toString()"
      @click="toggleMenu"
    >
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
  position: fixed;
  top: 0;
  right: 0;
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
  outline: none;
  transition: outline-offset 0.2s;
}

.navbar a:focus,
.menu-toggle:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
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
