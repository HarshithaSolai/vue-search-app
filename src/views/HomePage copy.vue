<template>
  <div class="flex flex-col justify-center items-center gap-4 mb-6 lg:flex-row">
    <SearchComponent @search="performSearch" />
    <TopicsFilterComponent :selectedTopic="selectedTopic" @topicSelected="handleTopicSelected" />
  </div>

  <ShowCardComponent :results="searchResults" :topic="selectedTopic" />

  <!-- <SearchResults :searchResults="searchResults" :selectedTopic="selectedTopic">
      <template v-slot="{ result }">
       {{ result }}
      </template>
    </SearchResults> 
  -->
</template>

<script>
import ShowCardComponent from '../components/ShowCardComponent.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchComponent from '../components/SearchComponent.vue'
import TopicsFilterComponent from '../components/TopicsFilterComponent.vue'
import { search } from '../api/mockAPI'
import mockData from '../api/mock-data.json' // Import the mock data

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
      search(query)
        .then((results) => {
          this.searchResults = results
        })
        .catch((error) => {
          console.error('Error:', error)
          // Handle errors gracefully
        })
    },
    performSearch(query) {
      this.searchResults = mockData[this.selectedTopic].filter((item) => {
        if (this.selectedTopic === 'people') {
          return (
            item.first_name.toLowerCase().includes(query.toLowerCase()) ||
            item.last_name.toLowerCase().includes(query.toLowerCase()) ||
            item.gender.toLowerCase().includes(query.toLowerCase()) ||
            item.email.toLowerCase().includes(query.toLowerCase())
          )
        } else if (this.selectedTopic === 'organizations') {
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.industry.toLowerCase().includes(query.toLowerCase())
          )
        } else if (this.selectedTopic === 'addresses') {
          return (
            item.street.toLowerCase().includes(query.toLowerCase()) ||
            item.house_number.toLowerCase().includes(query.toLowerCase()) ||
            item.city.toLowerCase().includes(query.toLowerCase()) ||
            item.state.toLowerCase().includes(query.toLowerCase()) ||
            item.country.toLowerCase().includes(query.toLowerCase()) ||
            item.postal_code.toLowerCase().includes(query.toLowerCase())
          )
        } else {
          return false // Handle other topics as needed
        }
      })
    }
  },
  components: {
    SearchComponent,
    ShowCardComponent,
    TopicsFilterComponent,
    SearchResults
  }
}
</script>
