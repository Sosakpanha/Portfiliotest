import { createI18n } from 'vue-i18n'
import en from '@/locales/en.i18n'
import it from '@/locales/it.i18n'
import km from '@/locales/km.i18n'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('selected-lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    it,
    km
  }
})
