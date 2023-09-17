import { mount } from '@vue/test-utils'
import StatusMessage from '../StatusMessage.vue'

describe('StatusMessage', () => {
  it('renders the component with the correct message for "error" type', () => {
    const wrapper = mount(StatusMessage, {
      props: {
        type: 'error'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Something went wrong...')
    wrapper.unmount()
  })

  it('renders the component with the correct message for "loading" type', () => {
    const wrapper = mount(StatusMessage, {
      props: {
        type: 'loading'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Loading...')
    wrapper.unmount()
  })

  it('renders the component with the correct message for "no-data" type', () => {
    const wrapper = mount(StatusMessage, {
      props: {
        type: 'no-data'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('No matching data found...')
    wrapper.unmount()
  })

  it('renders the component with the correct message for "initial-state" type', () => {
    const wrapper = mount(StatusMessage, {
      props: {
        type: 'initial-state'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Please search for a topic to view the results....')
    wrapper.unmount()
  })

  it('renders the component with the default message for an unknown type', () => {
    const wrapper = mount(StatusMessage, {
      props: {
        type: 'unknown'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Unforeseen error...')
    wrapper.unmount()
  })
})
