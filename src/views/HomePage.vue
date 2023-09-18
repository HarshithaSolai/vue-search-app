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
import { ref, onMounted, computed } from 'vue';
import CardsList from '../components/CardsList.vue';
import SearchComponent from '../components/SearchComponent.vue';
import FilterComponent from '../components/FilterComponent.vue';
import { fetchData, fetchTopics } from '../api/services/mockDataService';
import StatusMessage from '../components/StatusMessage.vue';

export default {
  name: 'HomePage',
  setup() {
    const loading = ref(false);
    const error = ref(null);
    const apiError = ref(null);
    const searchResults = ref([]);
    const selectedTopic = ref('all');
    const topicOptions = ref([]);

    const isInitialState = computed(() => !loading.value && !apiError.value && !error.value && searchResults.value.length === 0);
    const shouldShowNoDataError = computed(() => searchResults.value.length === 0 && error.value);
    
    const fetchTopicOptions = async () => {
      try {
        const responseData = await fetchTopics();
        console.log(responseData);
        topicOptions.value = ['all', ...responseData];
      } catch (err) {
        apiError.value = err;
      }
    };

    const handleTopicSelected = (topic) => {
      selectedTopic.value = topic;
      searchResults.value = [];
      loading.value = false;
      error.value = null;
    };

    const handleSearch = (query) => {
      error.value = null;
      loading.value = true;

      fetchData(query, selectedTopic.value)
        .then((results) => {
          searchResults.value = results;
          error.value = results.length === 0 ? new Error('No matching data found') : null;
        })
        .catch((err) => {
          apiError.value = err;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    onMounted(() => {
      fetchTopicOptions();
    });

    return {
      loading,
      error,
      apiError,
      searchResults,
      selectedTopic,
      topicOptions,
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
