<script setup lang="ts">
defineProps<{
  icon: string
  name: string
}>()
</script>

<template>
  <div class="skill-item">
    <img :src="icon" :alt="name + ' icon'" class="skill-icon" />
    <span class="skill-name">{{ name }}</span>
  </div>
</template>

<style scoped>
.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.skill-name {
  margin-top: 0.5rem;
  text-align: center;
}
</style>
