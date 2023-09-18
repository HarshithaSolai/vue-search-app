<template>
  <div class="flex flex-col justify-center items-center gap-4 mb-6 lg:flex-row">
    <FilterComponent
      :label="'Filter By Topics'"
      :options="topicOptions"
      :selectedOption="selectedTopic"
      @optionSelected="handleTopicSelected"
    />
    <SearchComponent @search="handleSearch" :loading="loading" />
  </div>
  <div v-if="isInitialState">
    <StatusMessage type="initial-state" />
  </div>
  <div v-else-if="shouldShowNoDataError">
    <StatusMessage type="no-data" />
  </div>
  <div v-else-if="loading">
    <StatusMessage type="loading" />
  </div>
  <div v-else-if="apiError">
    <StatusMessage type="error" />
  </div>
  <div v-else>
    <CardsList :results="searchResults" :topic="selectedTopic" />
  </div>
</template>

<script>
import { reactive, onMounted, computed, toRefs } from 'vue';
import CardsList from '../components/CardsList.vue';
import SearchComponent from '../components/SearchComponent.vue';
import FilterComponent from '../components/FilterComponent.vue';
import { fetchData, fetchTopics } from '../api/services/mockDataService';
import StatusMessage from '../components/StatusMessage.vue';

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      loading: false,
      error: null,
      apiError: null,
      searchResults: [],
      selectedTopic: 'all',
      topicOptions: [],
    });

    const isInitialState = computed(() => !state.loading && !state.apiError && !state.error && state.searchResults.length === 0);
    const shouldShowNoDataError = computed(() => state.searchResults.length === 0 && state.error);
    
    const fetchTopicOptions = async () => {
      try {
        const responseData = await fetchTopics();
        console.log(responseData)
        state.topicOptions = ['all', ...responseData];
      } catch (err) {
        state.apiError = err;
      }
    };

    const handleTopicSelected = (topic) => {
      state.selectedTopic = topic;
      state.searchResults = [];
      state.loading = false;
      state.error = null;
    };

    const handleSearch = (query) => {
      state.error = null;
      state.loading = true;

      fetchData(query, state.selectedTopic)
        .then((results) => {
          state.searchResults = results;
          state.error = results.length === 0 ? new Error('No matching data found') : null;
        })
        .catch((err) => {
          state.apiError = err;
        })
        .finally(() => {
          state.loading = false;
        });
    };

    onMounted(() => {
      fetchTopicOptions();
    });

    return {
      ...state,
      isInitialState,
      shouldShowNoDataError,
      handleTopicSelected,
      handleSearch,
    };
  },

  components: {
    SearchComponent,
    CardsList,
    FilterComponent,
    StatusMessage
  }
}
</script>
