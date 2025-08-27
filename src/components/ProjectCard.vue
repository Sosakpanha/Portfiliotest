<script setup lang="ts">
defineProps<{
  title: string
  image: string
  description: string
  link: string
}>()
</script>

<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-image" loading="lazy" />
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-description">{{ description }}</p>
    <a :href="link" target="_blank" rel="noopener" class="project-link" :aria-label="'View ' + title">
      View Project
    </a>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--color-background-soft);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-title {
  margin-top: 0.5rem;
  font-size: 1.25rem;
}

.project-description {
  margin: 0.5rem 0 1rem;
}

.project-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  outline: none;
}

.project-link:focus {
  outline: 2px solid #42b983;
  outline-offset: 2px;
}
</style>
