<template>
  <div class="flex flex-col justify-center items-center gap-4 mb-6 lg:flex-row">
    <SearchComponent @search="handleSearch" />
    <TopicsFilterComponent :selectedTopic="selectedTopic" @topicSelected="handleTopicSelected" />
  </div>
  <ShowCardComponent :results="searchResults" :topic="selectedTopic" />
</template>

<script>
import ShowCardComponent from '../components/ShowCardComponent.vue'
import SearchComponent from '../components/SearchComponent.vue'
import TopicsFilterComponent from '../components/TopicsFilterComponent.vue'
import { fetchData } from '../api/services/mockDataService'

export default {
  name: 'HomePage',
  data() {
    return {
      searchResults: [],
      selectedTopic: 'people'
    }
  },
  methods: {
    handleTopicSelected(topic) {
      this.selectedTopic = topic
      this.searchResults = []
    },
    handleSearch(query) {
      fetchData(query, this.selectedTopic)
        .then((results) => {
          this.searchResults = results
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  },
  components: {
    SearchComponent,
    ShowCardComponent,
    TopicsFilterComponent
  }
}
</script>
