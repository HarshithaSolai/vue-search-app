<template>
  <div>
    <h3>{{ result.name }}</h3>
    <p>Industry: {{ result.industry }}</p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>
