<template>
  <div class="flex flex-col justify-center items-center">
    <div
      v-for="(result, index) in results"
      :key="index"
      class="flex flex-col w-2/3 rounded shadow-lg px-6 py-4"
    >
      <!-- Dynamically render the appropriate card component -->
      <component
        :is="getCardComponentName()"
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
    getCardComponentName() {
      if (this.topic === "people") {
        return "PeopleCard";
      } else if (this.topic === "organizations") {
        return "OrganizationCard";
      } else if (this.topic === "addresses") {
        return "AddressCard";
      }
    },
  },
};
</script>
