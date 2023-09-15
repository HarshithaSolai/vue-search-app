<template>
  <div class="flex flex-col justify-center items-center gap-4 mb-6 lg:flex-row">
    <SearchComponent @search="handleSearch" :loading="loading"/>
    <TopicsFilterComponent :selectedTopic="selectedTopic" @topicSelected="handleTopicSelected" />
  </div>
  <div v-if="searchResults.length === 0 && !loading && !error">
    <TransitionStateComponent type="initial-state" />
  </div>

  <div v-else-if="searchResults.length === 0 && error">
    <TransitionStateComponent type="no-data" />
  </div>
  <div v-else-if="loading">
    <TransitionStateComponent type="loading" />
  </div>
  <div v-else-if="error">
    <TransitionStateComponent type="error" />
  </div>
  <div v-else>
    <ShowCardComponent :results="searchResults" :topic="selectedTopic" />

  </div>

</template>

<script>
import ShowCardComponent from '../components/ShowCardComponent.vue'
import SearchComponent from '../components/SearchComponent.vue'
import TopicsFilterComponent from '../components/TopicsFilterComponent.vue'
import { fetchData } from '../api/services/mockDataService'
import TransitionStateComponent from "../components/TransitionStateComponent.vue";

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
      error: null,
      searchResults: [],
      selectedTopic: 'people'
    }
  },
  methods: {
    handleTopicSelected(topic) {
      this.selectedTopic = topic;
      this.searchResults = [];
      this.loading = false;
      this.error = null;
    },
    handleSearch(query) {
      this.loading = true;
      fetchData(query, this.selectedTopic)
        .then((results) => {
          this.searchResults = results;
          this.error = null;
          this.loading = false;
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
    ShowCardComponent,
    TopicsFilterComponent,
    TransitionStateComponent
  }
}
</script>
