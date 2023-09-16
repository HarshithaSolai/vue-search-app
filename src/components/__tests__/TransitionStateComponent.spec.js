import { mount } from '@vue/test-utils'
import TransitionStateComponent from '../TransitionStateComponent.vue'

describe('TransitionStateComponent', () => {
  it('renders the component with the "error" message', () => {
    const wrapper = mount(TransitionStateComponent, {
      props: {
        type: 'error'
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Something went wrong...')
    expect(wrapper.attributes('data-testid')).toBe('error')
  })

  it('renders the component with the "loading" message', () => {
    const wrapper = mount(TransitionStateComponent, {
      props: {
        type: 'loading'
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Loading...')
    expect(wrapper.attributes('data-testid')).toBe('loading')
  })

  it('renders the component with the "no-data" message', () => {
    const wrapper = mount(TransitionStateComponent, {
      props: {
        type: 'no-data'
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('No data found...')
    expect(wrapper.attributes('data-testid')).toBe('no-data')
  })

  it('renders the component with the "initial-state" message', () => {
    const wrapper = mount(TransitionStateComponent, {
      props: {
        type: 'initial-state'
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Please search for a topic to view the results....')
    expect(wrapper.attributes('data-testid')).toBe('initial-state')
  })

  it('renders the component with an "unforeseen error" message for an unknown type', () => {
    const wrapper = mount(TransitionStateComponent, {
      props: {
        type: 'unknown'
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Unforeseen error...')
    expect(wrapper.attributes('data-testid')).toBe('unknown')
  })
})
