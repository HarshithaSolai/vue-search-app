<template>
  <BaseCard
    :image-src="mapImage"
    :alt-text="result.street"
    :title="result.city + ', ' + result.country"
    :link-to="{ name: 'info' }"
  >
    <p data-testid="street"><span class="font-bold">Street:</span> {{ result.street }}</p>
    <p data-testid="house_number"><span class="font-bold">House number: </span>{{ result.house_number }}</p>
    <p data-testid="city"><span class="font-bold">City:</span> {{ result.city }}</p>
    <p data-testid="postal_code"><span class="font-bold">Postal Code:</span> {{ result.postal_code }}</p>
    <p data-testid="country"><span class="font-bold">Country:</span> {{ result.country }}</p>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import mapImage from '../assets/images/map.png'

export default {
  props: {
    result: Object
  },
  data() {
    return {
      mapImage: mapImage
    }
  },
  components: {
    BaseCard
  }
}
</script>
