import type { Directive } from 'vue'

const animateOnScroll: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('before-enter')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('enter')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(el)
  },
}

export default animateOnScroll
