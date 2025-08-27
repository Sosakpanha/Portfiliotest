import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar', () => {
  it('renders all navigation links', () => {
    const wrapper = mount(NavBar, {
      global: {
        stubs: {
          RouterLink: {
            template: '<a><slot /></a>'
          }
        }
      }
    })
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(4)
  })

  it('toggles mobile menu', async () => {
    const wrapper = mount(NavBar, {
      global: {
        stubs: {
          RouterLink: { template: '<a><slot /></a>' },
        },
      },
    })

    const button = wrapper.get('button')
    expect(wrapper.find('ul').classes()).not.toContain('open')
    await button.trigger('click')
    expect(wrapper.find('ul').classes()).toContain('open')
  })
})
