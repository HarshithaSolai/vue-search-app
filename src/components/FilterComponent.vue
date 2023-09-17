<template>
  <div class="inline-flex flex-wrap">
    <h3 class="mr-5 text-xl font-bold text-abn-green">{{ label }}:</h3>
    <select
      :value="selectedOption"
      @input="updateSelectedOption"
      class="border focus:outline-none border-abn-yellow w-[180px] h-[30px]"
    >
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    options: Array,
    selectedOption: String,
  },
  methods: {
    updateSelectedOption(event) {
      // Emit an event to update the selected option
      this.$emit('optionSelected', event.target.value)
    }
  }
}
</script>
