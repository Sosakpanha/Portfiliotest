import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '@/components/ProjectCard.vue'

describe('ProjectCard', () => {
  it('renders props correctly', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Test Project',
        image: '/img.png',
        description: 'A cool project',
        link: 'https://example.com'
      }
    })

    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('A cool project')

    const img = wrapper.get('img')
    expect(img.attributes('src')).toBe('/img.png')
    expect(img.attributes('alt')).toBe('Test Project')

    const anchor = wrapper.get('a')
    expect(anchor.attributes('href')).toBe('https://example.com')
  })
})
