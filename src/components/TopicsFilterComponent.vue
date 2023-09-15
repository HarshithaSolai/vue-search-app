<template>
  <div class="inline-flex flex-wrap">
    <h3 class="mr-5 text-xl font-bold text-abn-green">Filter By Topics:</h3>
    <select
      :value="selectedTopic"
      @input="updateSelectedTopic"
      class="border focus:outline-none border-abn-yellow w-[180px] h-[30px]"
    >
      <option value="people">People</option>
      <option value="organizations">Organizations</option>
      <option value="addresses">Addresses</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectedTopic: String // Define the prop to receive the selected topic
  },
  methods: {
    updateSelectedTopic(event) {
      // Emit an event to update the selected topic
      this.$emit('topicSelected', event.target.value)
    }
  }
}
</script>
