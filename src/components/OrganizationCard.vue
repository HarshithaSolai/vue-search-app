<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <div class="flex flex-row justify-center items-center">
      <img
        loading="lazy"
        class="object-cover h-full w-[160px]"
        :src="organizationImage"
        :alt="result.name"
      />
    </div>
    <div class="flex flex-col sm:items-start sm:justify-between">
      <h3 class="font-bold text-xl text-abn-green hover:underline">
        <router-link :to="{ name: 'info' }">{{ result.name }}</router-link>
      </h3>
      <p data-testid="name"><span class="font-bold">Organization Name: </span>{{ result.name }}</p>
      <p data-testid="industry"><span class="font-bold">Industry:</span> {{ result.industry }}</p>
    </div>
  </div>
</template>

<script>
import organizationImage from '../assets/images/organization.png'

export default {
  props: {
    result: Object
  },
  data() {
    return {
      organizationImage: organizationImage
    }
  }
}
</script>
