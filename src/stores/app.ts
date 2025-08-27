import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Dictionary } from '@/types/dictionary'
import { Language } from '@/types/language'

import EN_DICTIONARY from '@/locales/en.i18n'
import IT_DICTIONARY from '@/locales/it.i18n'
import KM_DICTIONARY from '@/locales/km.i18n'

export const useAppStore = defineStore('app', () => {
  const validLanguages = Object.values(Language)
  let savedLang = localStorage.getItem('selected-lang')
  if (!validLanguages.includes(savedLang as Language)) {
    savedLang = Language.en
  }
  const selectedLang = ref(savedLang as Language)

  const currentDictionary = computed<Dictionary>(() => {
    if (selectedLang.value === Language.it) return IT_DICTIONARY
    if (selectedLang.value === Language.km) return KM_DICTIONARY
    return EN_DICTIONARY
  })

  function toggleLanguage() {
    if (selectedLang.value === Language.en) {
      selectedLang.value = Language.it
    } else if (selectedLang.value === Language.it) {
      selectedLang.value = Language.km
    } else {
      selectedLang.value = Language.en
    }
    localStorage.setItem('selected-lang', selectedLang.value)
  }

  return { selectedLang, currentDictionary, toggleLanguage }
})
