<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-heading">Welcome to My Portfolio</h1>
      <p class="hero-subheading">Frontend Developer & Designer</p>
    </div>
    <div class="hero-animation" aria-hidden="true"></div>
    <div class="scroll-indicator" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>Scroll down</title>
        <path
          d="M12 5v14M5 12l7 7 7-7"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </section>
</template>

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

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  color: var(--vt-c-white, #fff);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
}
</style>
