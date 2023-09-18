import { mount } from '@vue/test-utils';
import HomePage from '../HomePage.vue';
import SearchComponent from '../../components/SearchComponent.vue';
import CardsList from '../../components/CardsList.vue';

// Import your composables
import { useLoading } from '../../composables/useLoading';
import { useError } from '../../composables/useError';

describe('HomePage', () => {
  let wrapper;

  // Mock fetchData and fetchTopics if needed
  const fetchData = jest.fn();
  const fetchTopics = jest.fn();

  // Mock your composables
  const { loading, startLoading, stopLoading } = useLoading();
  const { error, apiError, setError, setApiError, clearErrors } = useError();

  beforeEach(() => {
    wrapper = mount(HomePage, {
      global: {
        provide: {
          // Provide your composables
          loading: { loading, startLoading, stopLoading },
          error: { error, apiError, setError, setApiError, clearErrors },
          searchResults: [],
          selectedTopic: 'all',
          topicOptions: [],
        },
        // Mock fetchData and fetchTopics if needed
        mocks: {
          fetchData,
          fetchTopics,
        },
      },
    });
  });

  it('initializes with correct data values', () => {
    expect(loading.value).toBe(false);
    expect(error.value).toBeNull();
    expect(apiError.value).toBeNull();
    expect(wrapper.vm.searchResults).toEqual([]);
    expect(wrapper.vm.selectedTopic).toBe('all');
  });

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
    loading.value = false;
    error.value = null;
    apiError.value = null;
    wrapper.vm.searchResults = [];

    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="initial-state"]').exists()).toBe(true);
  });

  it('displays loading message while fetching data', async () => {
    loading.value = true;
    error.value = null;
    apiError.value = null;
    wrapper.vm.searchResults = [];

    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
  });

  it('displays error message when an API error occurs', async () => {
    loading.value = false;
    error.value = null;
    apiError.value = new Error('API error message');
    wrapper.vm.searchResults = [];

    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true);
  });

  it('displays "no-data" message when no search results and error', async () => {
    loading.value = false;
    error.value = new Error('No matching data found');
    apiError.value = null;
    wrapper.vm.searchResults = [];

    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(true);
  });

  it('displays search results when searchResults are available', async () => {
    loading.value = false;
    error.value = null;
    apiError.value = null;
    wrapper.vm.searchResults = [
      {
        id: 1,
        type: 'people',
        first_name: 'Quill',
        last_name: 'Surcomb',
        email: 'qsurcomb0@artisteer.com',
        gender: 'Male',
      },
      {
        id: 2,
        type: 'people',
        first_name: 'Silvester',
        last_name: 'Pontain',
        email: 'spontain1@vkontakte.ru',
        gender: 'Male',
      },
    ]

    await wrapper.vm.$nextTick();


    expect(wrapper.findComponent(CardsList).exists()).toBe(true);
  });
});
