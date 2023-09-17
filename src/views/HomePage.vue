<template>
  <div class="flex flex-col justify-center items-center gap-4 mb-6 lg:flex-row">
    <SearchComponent @search="handleSearch" :loading="loading"/>
    <FilterComponent 
      :label="'Filter By Topics'" 
      :options="topicOptions" 
      :selectedOption="selectedTopic"
      @optionSelected="handleTopicSelected" />
  </div>
  <div v-if="searchResults.length === 0 && !loading && !error">
    <StatusMessage type="initial-state" />
  </div>
  <div v-else-if="searchResults.length === 0 && error">
    <StatusMessage type="no-data" />
  </div>
  <div v-else-if="loading">
    <StatusMessage type="loading" />
  </div>
  <div v-else-if="error">
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
import StatusMessage from "../components/StatusMessage.vue";

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
      error: null,
      searchResults: [],
      selectedTopic: 'people',
      topicOptions: [] // Initialize topicOptions as an empty array
    }
  },
  created() {
    // Fetch topic options when the component is created
    this.fetchTopicOptions();
  },
  methods: {
    // Add a method to fetch topic options
    async fetchTopicOptions() {
      try {
        const responseData = await fetchTopics(); 
        this.topicOptions = ['all' , ...responseData];

        // Fetch topic options
        console.log(this.topicOptions)
      } catch (error) {
        console.error('Error fetching topic options:', error);
        // Handle the error as needed
      }
    },
    handleTopicSelected(topic) {
      if (topic === 'all') {
      // If "All" is selected, set selectedTopic to an empty string
      this.selectedTopic = 'all';
    } else {
      // Otherwise, set the selectedTopic to the chosen topic
      this.selectedTopic = topic;
    }

      this.searchResults = [];
      this.loading = false;
      this.error = null;
    },
    handleSearch(query) {
      this.loading = true;
      fetchData(query, this.selectedTopic)
        .then((results) => {
          this.searchResults = results;
          this.loading = false;
          this.error = (results.length === 0) ? new Error('No matching data found') : null;

        })
        .catch((error) => {
          console.error('Error:', error);
          this.error = error;
          this.loading = false;
        })
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
