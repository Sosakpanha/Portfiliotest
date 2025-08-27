<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { Language } from '@/types/language'
import { useI18n } from 'vue-i18n'

const display = useDisplay()
const selectedTab = ref('about')

import { navbarTabs } from '@/constants/navbarTabs'

const tabs = navbarTabs

const languageOptions = [
  { code: Language.en, label: 'EN' },
  { code: Language.it, label: 'IT' },
  { code: Language.km, label: 'ខ្មែរ' },
]

const { locale } = useI18n()

import { useThemeStore } from '@/stores/theme'
import type { ThemeMode } from '@/stores/theme'
import { storeToRefs } from 'pinia'
const themeStore = useThemeStore()
const { mode } = storeToRefs(themeStore)

const themeOptions: { value: ThemeMode; label: string; icon: string }[] = [
  { value: 'light', label: 'Light', icon: 'mdi-white-balance-sunny' },
  { value: 'dark', label: 'Dark', icon: 'mdi-weather-night' },
  { value: 'system', label: 'System', icon: 'mdi-monitor' },
  { value: 'auto', label: 'Auto', icon: 'mdi-theme-light-dark' },
]

function selectTheme(newMode: string) {
  mode.value = newMode as ThemeMode
}

function selectLanguage(lang: Language) {
  locale.value = lang
  localStorage.setItem('selected-lang', lang)
}

const emit = defineEmits(['scrollToSection'])
function onTabClick(tabName: string) {
  emit('scrollToSection', tabName)
}

const isMobile = computed(() => display.smAndDown.value)
</script>

<template>
  <v-tabs
    v-model="selectedTab"
    :fixed-tabs="!isMobile"
    :center-active="isMobile"
    class="navbar-tabs"
    :class="[isMobile ? 'fixed-bottom' : 'fixed-top', 'bg-primary', 'elevation-1']"
  >
    <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value" @click="onTabClick(tab.value)">
      <v-icon start>{{ tab.icon }}</v-icon>
      <span>
        {{ $t(`navbar.${tab.labelKey}`) }}
      </span>
    </v-tab>
    <v-divider vertical class="mx-2" />
    <v-menu>
      <template #activator="{ props }">
        <v-tab
          v-bind="props"
          class="lang-tab"
          style="display: flex; align-items: center; min-width: 64px"
          ripple
        >
          <v-icon size="20" class="mr-2" color="#fff">mdi-earth</v-icon>
          <span class="lang-label">{{
            languageOptions.find((opt) => opt.code === locale)?.label
          }}</span>
        </v-tab>
      </template>
      <v-list>
        <v-list-item
          v-for="option in languageOptions"
          :key="option.code"
          @click="selectLanguage(option.code)"
        >
          <v-list-item-title>{{ option.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Modern Theme Switcher Dropdown -->
    <v-menu>
      <template #activator="{ props }">
        <v-tab
          v-bind="props"
          class="theme-tab"
          style="display: flex; align-items: center; min-width: 64px"
          ripple
        >
          <v-icon size="22" class="mr-2" color="#fff">
            {{ themeOptions.find((opt) => opt.value === mode)?.icon }}
          </v-icon>
          <span class="theme-label">{{
            themeOptions.find((opt) => opt.value === mode)?.label
          }}</span>
          <v-icon size="18" class="ml-1" color="#fff">mdi-chevron-down</v-icon>
        </v-tab>
      </template>
      <v-list class="theme-dropdown-list">
        <v-list-item
          v-for="option in themeOptions"
          :key="option.value"
          @click="selectTheme(option.value)"
          :class="{ 'theme-active': mode === option.value }"
        >
          <v-icon size="22" class="mr-2">{{ option.icon }}</v-icon>
          <v-list-item-title>{{ option.label }}</v-list-item-title>
          <v-spacer />
          <v-icon v-if="mode === option.value" size="18" color="#4caf50" class="theme-check"
            >mdi-check</v-icon
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-tabs>
</template>

<style scoped>
.navbar-tabs {
  z-index: 2000;
  background: #1565c0;
  border-bottom: 1.5px solid #1453a6;
  min-height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
}
.v-tab {
  min-height: 40px;
  margin: 0 4px;
  padding: 0 18px;
  border-radius: 22px;
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  transition:
    background 0.18s,
    color 0.18s;
}
.v-tab--active,
.v-tab:hover {
  background: rgba(255, 255, 255, 0.13) !important;
  color: #fff !important;
}
.lang-tab {
  display: flex;
  align-items: center;
  min-width: 64px;
  padding: 0 18px;
  border-radius: 22px;
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  transition:
    background 0.18s,
    color 0.18s;
}
.theme-tab {
  display: flex;
  align-items: center;
  min-width: 64px;
  padding: 0 18px;
  border-radius: 22px;
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  transition:
    background 0.18s,
    color 0.18s;
}
.lang-tab .v-icon,
.theme-tab .v-icon {
  margin-right: 8px;
}
.theme-tab .ml-1 {
  margin-left: 4px;
}
.theme-check {
  margin-left: 6px;
}
.theme-dropdown-list {
  min-width: 180px;
  padding: 4px 0;
}
.theme-dropdown-list .v-list-item {
  border-radius: 8px;
  transition:
    background 0.18s,
    color 0.18s;
}
.theme-dropdown-list .v-list-item.theme-active,
.theme-dropdown-list .v-list-item:focus,
.theme-dropdown-list .v-list-item:hover {
  background: #e3f2fd !important;
  color: #1565c0 !important;
}
.theme-dropdown-list .v-list-item.theme-active .v-icon,
.theme-dropdown-list .v-list-item.theme-active .v-list-item-title {
  color: #1565c0 !important;
}
.theme-dropdown-list .v-list-item .v-list-item-title {
  font-weight: 500;
  font-size: 1rem;
}

.lang-tab .lang-label,
.theme-tab .theme-label {
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.03em;
}
.lang-tab--active,
.lang-tab:focus,
.lang-tab:hover,
.theme-tab--active,
.theme-tab:focus,
.theme-tab:hover {
  background: rgba(255, 255, 255, 0.13) !important;
  color: #fff !important;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
