<template>
  <div className="flex items-center justify-center h-[60vh]">
    <h2 className="text-2xl text-gray-500" :data-testid="type">
      {{ message }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'StatusMessage',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: ''
    }
  },
  created() {
    switch (this.type) {
      case 'error':
        this.message = 'Something went wrong...'
        break
      case 'loading':
        this.message = 'Loading...'
        break
      case 'no-data':
        this.message = 'No data found...'
        break
      case 'initial-state':
        this.message = 'Please search for a topic to view the results....'
        break
      default:
        this.message = 'Unforseen error...'
    }
  }
}
</script>
