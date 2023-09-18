<template>
  <BaseCard
    :image-src="organizationImage"
    :alt-text="result.name"
    :title="result.name"
    :link-to="{ name: 'info' }"
  >
    <p data-testid="name"><span class="font-bold">Organization Name: </span>{{ result.name }}</p>
    <p data-testid="industry"><span class="font-bold">Industry:</span> {{ result.industry }}</p>
    <p data-testid="website"><span class="font-bold">Website:</span> {{ result.website }}</p>
    <p data-testid="company_size"><span class="font-bold">Number of Employees:</span> {{ result.company_size }}</p>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import organizationImage from '../assets/images/organization.png';

export default {
  props: {
    result: Object,
  },
  components: {
    BaseCard,
  },
  data() {
    return {
      organizationImage: organizationImage,
    };
  },
};
</script>
