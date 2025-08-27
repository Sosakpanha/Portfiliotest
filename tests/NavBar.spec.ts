import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { navbarTabs } from '@/constants/navbarTabs'

vi.mock('vuetify', () => ({
  useDisplay: () => ({ smAndDown: { value: false } })
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ locale: { value: 'en' } })
}))

vi.mock('pinia', () => ({
  storeToRefs: (store: any) => store
}))

vi.mock('@/stores/theme', () => ({
  useThemeStore: () => ({ mode: ref('light') })
}))

function factory() {
  return mount(NavBar, {
    global: {
      stubs: {
        'v-tabs': { template: '<div><slot /></div>' },
        'v-tab': { template: '<button><slot /></button>' },
        'v-icon': { template: '<i><slot /></i>' },
        'v-divider': { template: '<div><slot /></div>' },
        'v-menu': { template: '<div><slot /></div>' },
        'v-list': { template: '<ul><slot /></ul>' },
        'v-list-item': { template: '<li><slot /></li>' },
        'v-list-item-title': { template: '<span><slot /></span>' },
        'v-spacer': { template: '<span></span>' },
        RouterLink: { template: '<a><slot /></a>' }
      },
      mocks: {
        $t: (s: string) => s
      }
    }
  })
}

describe('NavBar', () => {
  it('renders a tab for each navigation item', () => {
    const wrapper = factory()
    const tabs = wrapper.findAll('button')
    expect(tabs).toHaveLength(navbarTabs.length)
  })

  it('emits scrollToSection when a tab is clicked', async () => {
    const wrapper = factory()
    const firstTab = wrapper.findAll('button')[0]
    await firstTab.trigger('click')
    expect(wrapper.emitted('scrollToSection')![0]).toEqual([navbarTabs[0].value])
  })
})

