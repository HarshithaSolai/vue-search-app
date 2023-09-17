<template>
  <div class="flex flex-row gap-2">
    <input
      class="px-2 border outline-none border-abn-yellow w-[250px] sm:w-[400px]"
      type="text"
      data-testid="search-input"
      v-model="searchQuery"
      placeholder="Search for a topic (min 3 characters required)"
    />
    <button
      class="bg-abn-green text-white rounded-md h-[30px] w-[50px] sm:w-[80px] disabled:opacity-50 disabled:pointer-events-none"
      @click="search"
      data-testid="search-btn"
      :disabled="searchQuery.length < 3 || loading"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },
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
