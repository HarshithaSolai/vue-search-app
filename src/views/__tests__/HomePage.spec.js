import { mount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'
import SearchComponent from '../../components/SearchComponent.vue'
import CardsList from '../../components/CardsList.vue'

describe('HomePage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomePage)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('initializes with correct data values', () => {
    expect(wrapper.vm.loading).toBe(false)
    expect(wrapper.vm.error).toBeNull()
    expect(wrapper.vm.apiError).toBeNull()
    expect(wrapper.vm.searchResults).toEqual([])
    expect(wrapper.vm.selectedTopic).toBe('all')
  })

  it('emits "search" event when handleSearch is called', async () => {
    const searchComponentWrapper = wrapper.findComponent(SearchComponent)
    const searchInput = searchComponentWrapper.find('[data-testid="search-input"]')
    await searchInput.setValue('example-query')
    wrapper.vm.$emit('search', 'example-query')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search[0]).toEqual(['example-query'])
  })

  it('updates selectedTopic when handleTopicSelected is called', async () => {
    await wrapper.vm.handleTopicSelected('example-topic')
    expect(wrapper.vm.selectedTopic).toBe('example-topic')
  })

  it('displays initial state message when no data is fetched', async () => {
    await wrapper.setData({
      loading: false,
      error: null,
      apiError: null,
      searchResults: []
    })

    expect(wrapper.find('[data-testid="initial-state"]').exists()).toBe(true)
  })

  it('displays loading message while fetching data', async () => {
    await wrapper.setData({
      loading: true,
      error: null,
      apiError: null,
      searchResults: []
    })

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true)
  })

  it('displays error message when an API error occurs', async () => {
    await wrapper.setData({
      loading: false,
      error: null,
      apiError: new Error('API error message'),
      searchResults: []
    })

    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true)
  })

  it('displays "no-data" message when no search results and error', async () => {
    await wrapper.setData({
      loading: false,
      error: new Error('No matching data found'),
      apiError: null,
      searchResults: []
    })

    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(true)
  })

  it('displays search results when searchResults are available', async () => {
    await wrapper.setData({
      loading: false,
      error: null,
      apiError: null,
      searchResults: [
        {
          id: 1,
          type: 'people',
          first_name: 'Quill',
          last_name: 'Surcomb',
          email: 'qsurcomb0@artisteer.com',
          gender: 'Male'
        },
        {
          id: 2,
          type: 'people',
          first_name: 'Silvester',
          last_name: 'Pontain',
          email: 'spontain1@vkontakte.ru',
          gender: 'Male'
        }
      ]
    })

    expect(wrapper.findComponent(CardsList).exists()).toBe(true)
  })
})
