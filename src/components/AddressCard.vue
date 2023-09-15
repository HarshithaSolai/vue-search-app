<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <div class="flex flex-row justify-center items-center">
      <img
        loading="lazy"
        class="object-cover h-full w-[160px]"
        :src="mapImage"
        :alt="result.street"
      />
    </div>
    <div class="flex flex-col items-center sm:justify-between">
      <p data-testid="street">Street: {{ result.street }}</p>
      <p data-testid="house_number">House number: {{ result.house_number }}</p>
      <p data-testid="city">City: {{ result.city }}</p>
      <p data-testid="postal_code">Postal Code: {{ result.postal_code }}</p>
      <p data-testid="country">Country: {{ result.country }}</p>
    </div>
  </div>
</template>

<script>
import mapImage from '../assets/images/map.png';

export default {
  props: {
    result: Object,
  },
  data() {
    return {
      mapImage: mapImage,
    };
  },
};
</script>
