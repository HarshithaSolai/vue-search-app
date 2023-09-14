<template>
  <div>
    <h3>{{ result.country }}</h3>
    <p>House Number: {{ result.houseNumber }}</p>
    <p>Postcode: {{ result.postcode }}</p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>
