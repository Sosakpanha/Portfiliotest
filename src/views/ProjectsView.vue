<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

interface Project {
  title: string
  image: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    image: new URL('../assets/logo.svg', import.meta.url).href,
    description: 'Example project description',
    link: '#',
  },
  {
    title: 'Project Two',
    image: new URL('../assets/logo.svg', import.meta.url).href,
    description: 'Another example project',
    link: '#',
  },
  {
    title: 'Project Three',
    image: new URL('../assets/logo.svg', import.meta.url).href,
    description: 'More information about this project',
    link: '#',
  },
]
</script>

<template>
  <section class="projects-view container">
    <h1 class="heading">Projects</h1>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        v-bind="project"
        :key="project.title"
        loading="lazy"
        v-animate-on-scroll
      />
    </div>
  </section>
</template>

<style scoped>
.projects-view {
  padding: 2rem 0;
  min-height: 100%;
}

.heading {
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.projects-grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
</style>
