import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { usePreferredDark } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark' | 'system' | 'auto'

export const useThemeStore = defineStore('theme', () => {
  const systemPrefersDark = usePreferredDark()
  const mode = ref<ThemeMode>('system')

  const isDark = computed(() => {
    if (mode.value === 'dark') return true
    if (mode.value === 'light') return false
    return systemPrefersDark.value
  })

  watch(
    mode,
    (val) => {
      localStorage.setItem('theme-mode', val)
    },
    { immediate: true },
  )

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null
    if (saved) mode.value = saved
  }

  return { mode, isDark }
})
