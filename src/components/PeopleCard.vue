<template>
  <div>
    <h3>{{ result.first_name }}{{ result.last_name }}</h3>
    <p>Gender: {{ result.age }}</p>
    <p>Email: {{ result.email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>
