import { mount } from '@vue/test-utils'
import SearchComponent from '../SearchComponent.vue'

describe('SearchComponent', () => {
  it('renders the component with the input and button elements', () => {
    const wrapper = mount(SearchComponent)
    expect(wrapper.exists()).toBe(true)
    const inputElement = wrapper.find('[data-testid="search-input"]')
    const buttonElement = wrapper.find('button')

    expect(inputElement.exists()).toBe(true)
    expect(buttonElement.exists()).toBe(true)
  })

  it('emits a "search" event when the search button is clicked', async () => {
    const wrapper = mount(SearchComponent)
    const inputElement = wrapper.find('[data-testid="search-input"]')
    await inputElement.setValue('example-query')
    const buttonElement = wrapper.find('button')
    await buttonElement.trigger('click')

    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search[0]).toEqual(['example-query'])
  })

  it('disables the search button when the input length is less than 3 characters or when loading is true', async () => {
    const wrapper = mount(SearchComponent, {
      props: {
        loading: false
      }
    })

    const inputElement = wrapper.find('[data-testid="search-input"]')
    const buttonElement = wrapper.find('[data-testid="search-btn"]')
    expect(buttonElement.element.disabled).toBeTruthy()

    await inputElement.setValue('ab')
    expect(buttonElement.element.disabled).toBeTruthy()

    await inputElement.setValue('abc')
    expect(buttonElement.element.disabled).toBeFalsy()

    await wrapper.setProps({ loading: true })
    expect(buttonElement.element.disabled).toBeTruthy()
  })
})
