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
  <div v-if="IsInitialState">
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
import CardsList from '../components/CardsList.vue'
import SearchComponent from '../components/SearchComponent.vue'
import FilterComponent from '../components/FilterComponent.vue'
import { fetchData, fetchTopics } from '../api/services/mockDataService'
import StatusMessage from '../components/StatusMessage.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
      error: null,
      apiError: null,
      searchResults: [],
      selectedTopic: 'all',
      topicOptions: []
    }
  },
  created() {
    this.fetchTopicOptions()
  },
  computed: {
    IsInitialState() {
      return !this.loading && !this.apiError && !this.error && this.searchResults.length === 0
    },
    shouldShowNoDataError() {
      return this.searchResults.length === 0 && this.error
    }
  },
  methods: {
    async fetchTopicOptions() {
      try {
        const responseData = await fetchTopics()
        this.topicOptions = ['all', ...responseData]
      } catch (error) {
        this.apiError = error
      }
    },
    handleTopicSelected(topic) {
      this.selectedTopic = topic;
      this.searchResults = [];
      this.loading = false;
      this.error = null;
    },
    handleSearch(query) {
      this.error = null
      this.loading = true
      fetchData(query, this.selectedTopic)
        .then((results) => {
          this.searchResults = results;
          this.error = results.length === 0 ? new Error('No matching data found') : null;
        })
        .catch((error) => {
          this.apiError = error;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  components: {
    SearchComponent,
    CardsList,
    FilterComponent,
    StatusMessage
  }
}
</script>
