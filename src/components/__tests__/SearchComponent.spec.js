import { mount } from '@vue/test-utils'
import SearchComponent from '../SearchComponent.vue'

describe('SearchComponent', () => {
  it('renders the component with the input and button elements', () => {
    const wrapper = mount(SearchComponent)

    // Verify that the component exists
    expect(wrapper.exists()).toBe(true)

    // Find the input element by its data-testid attribute
    const inputElement = wrapper.find('[data-testid="search-input"]')

    // Find the button element
    const buttonElement = wrapper.find('button')

    // Check if the input and button elements exist
    expect(inputElement.exists()).toBe(true)
    expect(buttonElement.exists()).toBe(true)
  })

  it('emits a "search" event when the search button is clicked', async () => {
    const wrapper = mount(SearchComponent)

    // Find the input element
    const inputElement = wrapper.find('[data-testid="search-input"]')

    // Set a value in the input
    await inputElement.setValue('example-query')

    // Find the button element
    const buttonElement = wrapper.find('button')

    // Trigger a click event on the button
    await buttonElement.trigger('click')

    // Check if the 'search' event was emitted with the correct query
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

    console.log(buttonElement.element.disabled)
    expect(buttonElement.element.disabled).toBeTruthy()

    await inputElement.setValue('ab')
    expect(buttonElement.element.disabled).toBeTruthy()

    await inputElement.setValue('abc')
    expect(buttonElement.element.disabled).toBeFalsy()

    await wrapper.setProps({ loading: true })
    expect(buttonElement.element.disabled).toBeTruthy()
  })
})
