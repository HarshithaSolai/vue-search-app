<template>
  <div>
    <h2>Search Results for {{ selectedTopic }}</h2>
    <ul>
      <li v-for="(result, index) in searchResults" :key="index">
        <!-- Use a slot to customize how each result item is rendered -->
        <template :v-slot="{ result }">
          <!-- Render the result based on the selected topic -->
          <component :is="getResultComponent(selectedTopic)" :result="result" />
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import PeopleCard from './PeopleCard.vue' // Import components for rendering different topics
import OrganizationCard from './OrganizationCard.vue'
import AddressCard from './AddressCard.vue'

export default {
  props: {
    searchResults: Array,
    selectedTopic: String
  },
  components: {
    PeopleCard,
    OrganizationCard,
    AddressCard
  },
  methods: {
    // Dynamically determine the component to render based on the selected topic
    getResultComponent(selectedTopic) {
      switch (selectedTopic) {
        case 'people':
          return PeopleCard
        case 'organizations':
          return OrganizationCard
        case 'addresses':
          return AddressCard
        default:
          return null
      }
    }
  }
}
</script>
