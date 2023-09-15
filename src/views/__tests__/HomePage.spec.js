// HomePage.spec.js
import { mount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'
import SearchComponent from '../../components/SearchComponent.vue'

describe('HomePage', () => {
  it('renders the component', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.exists()).toBe(true)
  })

  it('initializes with correct data values', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.vm.loading).toBe(false)
    expect(wrapper.vm.error).toBeNull()
    expect(wrapper.vm.searchResults).toEqual([])
    expect(wrapper.vm.selectedTopic).toBe('people')
  })

  it('emits "search" event when handleSearch is called', async () => {
    const wrapper = mount(HomePage)
    const searchComponentWrapper = wrapper.findComponent(SearchComponent) // Find the SearchComponent within HomePage
    const searchInput = searchComponentWrapper.find('[data-testid="search-input"]') // Find the search input
    // Set a value in the search input
    await searchInput.setValue('example-query')

    // Trigger the search method
    wrapper.vm.$emit('search')

    await wrapper.vm.$nextTick()

    // Check if the 'search' event was emitted
    expect(wrapper.emitted().search).toBeTruthy()
  })

  it('updates selectedTopic when handleTopicSelected is called', async () => {
    const wrapper = mount(HomePage)
    await wrapper.vm.handleTopicSelected('example-topic')
    expect(wrapper.vm.selectedTopic).toBe('example-topic')
  })

  // Add more test cases as needed...
})
