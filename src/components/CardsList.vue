<template>
  <div class="flex flex-col justify-center items-center">
    <div
      v-for="(result, index) in results"
      :key="index"
      class="flex flex-col w-2/3 rounded shadow-lg px-6 py-4"
    >
      <!-- Dynamically render the appropriate card component -->
      <component :is="getCardComponentName(result.type)" :result="result"></component>
    </div>
  </div>
</template>

<script>
import PeopleCard from './PeopleCard.vue'
import OrganizationCard from './OrganizationCard.vue'
import AddressCard from './AddressCard.vue'

const componentMap = {
  people: PeopleCard,
  organizations: OrganizationCard,
  addresses: AddressCard
}

export default {
  name: 'CardsList',
  props: {
    results: Array,
    topic: String
  },
  methods: {
    getCardComponentName(resultType) {
      const componentName = componentMap[resultType]

      if (this.topic !== 'all' && componentMap[this.topic]) {
        return componentMap[this.topic]
      }

      // If componentName is not found or topic is "all," return the default
      return componentName || PeopleCard
    }
  }
}
</script>
