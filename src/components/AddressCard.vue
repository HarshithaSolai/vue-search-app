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
    <div class="flex flex-col m:items-start sm:justify-between">
      <h3 class="font-bold text-xl text-abn-green hover:underline">
        <router-link :to="{ name: 'info' }">{{ result.city }}, {{ result.country }}</router-link>
      </h3>
      <p data-testid="street"><span class="font-bold">Street:</span> {{ result.street }}</p>
      <p data-testid="house_number"><span class="font-bold">House number: </span>{{ result.house_number }}</p>
      <p data-testid="city"><span class="font-bold">City:</span> {{ result.city }}</p>
      <p data-testid="postal_code"><span class="font-bold">Postal Code:</span> {{ result.postal_code }}</p>
      <p data-testid="country"><span class="font-bold">Country:</span> {{ result.country }}</p>
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
