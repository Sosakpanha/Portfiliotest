/// <reference types="vite/client" />

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof import('gsap').gsap
  }
}
