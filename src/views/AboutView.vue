<template>
  <section class="about container">
    <div class="profile">
      <img src="@/assets/logo.svg" alt="Profile image" class="profile-image" />
      <p class="bio">
        I'm a frontend developer who loves crafting delightful user experiences. I enjoy working
        with modern technologies to build fast and accessible applications.
      </p>
    </div>
    <div class="skills grid">
      <SkillItem v-for="skill in skills" :key="skill.name" :icon="skill.icon" :name="skill.name" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'

interface Skill {
  icon: string
  name: string
}

const skills: Skill[] = [
  { icon: new URL('../assets/logo.svg', import.meta.url).href, name: 'Vue' },
  { icon: new URL('../assets/logo.svg', import.meta.url).href, name: 'TypeScript' },
  { icon: new URL('../assets/logo.svg', import.meta.url).href, name: 'HTML' },
  { icon: new URL('../assets/logo.svg', import.meta.url).href, name: 'CSS' },
]
</script>

<style scoped>
.about {
  padding: 2rem 0;
  display: grid;
  gap: var(--spacing-lg);
}

.profile {
  text-align: center;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
}

.skills {
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}
</style>
