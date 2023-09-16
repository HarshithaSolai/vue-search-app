<template>
  <div class="flex flex-col justify-center items-center">
    <div
      v-for="(result, index) in results"
      :key="index"
      class="flex flex-col w-2/3 rounded shadow-lg px-6 py-4"
    >
      <!-- Dynamically render the appropriate card component -->
      <component
        :is="getCardComponentName(result.type)"
        :result="result"
      ></component>
    </div>
  </div>
</template>

<script>
import PeopleCard from "./PeopleCard.vue";
import OrganizationCard from "./OrganizationCard.vue";
import AddressCard from "./AddressCard.vue";

export default {
  name: "ShowCardComponent",
  props: {
    results: Array,
    topic: String,
  },
  components: {
    PeopleCard,
    OrganizationCard,
    AddressCard,
  },
  methods: {
    getCardComponentName(resultType) {
     // If the topic is "all," return all card components mixed
      if (this.topic === "all") {
        // Determine the component based on the result's topic
        if (resultType === "people") {
          return "PeopleCard";
        } else if (resultType === "organizations") {
          return "OrganizationCard";
        } else if (resultType === "addresses") {
          return "AddressCard";
        }
      } else {
        // Return the appropriate component based on the topic prop
        if (this.topic === "people") {
          return "PeopleCard";
        } else if (this.topic === "organizations") {
          return "OrganizationCard";
        } else if (this.topic === "addresses") {
          return "AddressCard";
        }
      }
    },
  },
};
</script>
