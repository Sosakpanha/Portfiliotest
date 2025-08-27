import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { i18n } from './i18n'

const app = createApp(App)
const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { dark: false, colors: {} },
      dark: { dark: true, colors: {} },
    },
  },
})

app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(i18n)

import { useThemeStore } from './stores/theme'
import { watch } from 'vue'

const themeStore = useThemeStore()
watch(
  () => themeStore.isDark,
  (isDark) => {
    vuetify.theme.global.name.value = isDark ? 'dark' : 'light'
  },
  { immediate: true }
)

app.mount('#app')
