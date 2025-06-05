<script setup lang="ts">
import { ref } from 'vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submit() {
  submitted.value = true
  name.value = ''
  email.value = ''
  message.value = ''
  setTimeout(() => {
    submitted.value = false
  }, 2000)
}
</script>

<template>
  <section class="contact-view container">
    <h1 class="heading">Get in touch</h1>
    <form @submit.prevent="submit" class="contact-form">
      <label>
        <span>Name</span>
        <input v-model="name" type="text" required />
      </label>
      <label>
        <span>Email</span>
        <input v-model="email" type="email" required />
      </label>
      <label class="message">
        <span>Message</span>
        <textarea v-model="message" required rows="4" />
      </label>
      <button type="submit">Send</button>
      <p v-if="submitted" class="success">Message sent!</p>
    </form>
    <div class="social-links">
      <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener">
        <IconGithub />
      </a>
      <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener">
        <IconTwitter />
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-view {
  padding: 2rem 0;
  min-height: 100%;
}

.heading {
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.contact-form {
  display: grid;
  gap: var(--spacing-md);
  max-width: 400px;
  margin-inline: auto;
}

.contact-form label {
  display: grid;
  gap: 0.25rem;
}

.contact-form input,
.contact-form textarea {
  border: 1px solid var(--color-border);
  padding: 0.5rem;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--color-heading);
  outline: none;
}

.contact-form button {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.success {
  color: #42b983;
  text-align: center;
}

.social-links {
  margin-top: var(--spacing-md);
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.social-links a:focus {
  outline: 2px solid var(--color-heading);
  outline-offset: 2px;
}
</style>
