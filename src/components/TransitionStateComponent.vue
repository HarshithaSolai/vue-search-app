<template>
  <div className="flex items-center justify-center h-screen">
    <h2 className="text-2xl" :data-testid="type">
      {{ message }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'TransitionStateComponent',
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
      case 'api-error':
        this.message = 'Something went wrong...'
        break
      case 'api-loading':
        this.message = 'Loading...'
        break
      case 'no-data':
        this.message = 'No data found...'
        break
      default:
        this.message = 'Unforseen error...'
    }
  }
}
</script>
