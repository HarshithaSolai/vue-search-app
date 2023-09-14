<template>
  <div class="flex flex-row gap-2">
    <input
      class="px-2 border outline-none border-gray-300 w-[250px] sm:w-[400px]"
      type="text"
      data-testid="search-input"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <button
      class="bg-abn-yellow text-white rounded-md h-[30px] w-[50px] sm:w-[80px]"
      @click="search"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>
