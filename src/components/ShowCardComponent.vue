<template>
  <div class="flex flex-col justify-center items-center">
    <div
      v-for="(result, index) in results"
      :key="index"
      class="flex flex-col w-2/3 rounded shadow-lg px-6 py-4"
    >
      <div v-if="topic === 'people'" class="flex flex-col gap-4 sm:flex-row">
        <div class="flex flex-row justify-center items-center">
          <img
            loading="lazy"
            class="object-cover h-full w-[160px]"
            :src="getProfileImage(result)"
            :alt="result.first_name"
          />
        </div>
        <div class="flex flex-col items-center sm:justify-between">
          <h3 class="font-bold">
            <a :href="result.link">{{ result.first_name }} {{ result.last_name }}</a>
          </h3>
          <p>First Name: {{ result.first_name }}</p>
          <p>Last Name: {{ result.last_name }}</p>
          <p>Gender: {{ result.gender }}</p>
          <p>Email: {{ result.email }}</p>
        </div>
      </div>
      <div v-else-if="topic === 'organizations'" class="flex flex-col gap-4 sm:flex-row">
        <div class="flex flex-row justify-center items-center">
          <img
            loading="lazy"
            class="object-cover h-full w-[160px]"
            :src="organizationImage"
            :alt="result.name"
          />
        </div>
        <div class="flex flex-col items-center sm:justify-center">
          <p>Organization Name: {{ result.name }}</p>
          <p>Industry: {{ result.industry }}</p>
        </div>
      </div>
      <div v-else-if="topic === 'addresses'" class="flex flex-col gap-4 sm:flex-row">
        <div class="flex flex-row justify-center items-center">
          <img
            loading="lazy"
            class="object-cover h-full w-[160px]"
            :src="mapImage"
            :alt="result.street"
          />
        </div>
        <div class="flex flex-col items-center sm:justify-between">
          <p>Street: {{ result.street }}</p>
          <p>House_number: {{ result.house_number }}</p>
          <p>State: {{ result.state }}</p>
          <p>City: {{ result.city }}</p>
          <p>Postal Code: {{ result.postalCode }}</p>
          <p>Country: {{ result.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import female from '../assets/images/female.png'
import male from '../assets/images/male.png'
import organization from '../assets/images/organization.png'
import map from '../assets/images/map.png'

export default {
  name: 'ShowCardComponent',
  props: {
    results: {
      type: Array
    },
    topic: {
      type: String
    }
  },
  data() {
    return {
      // Store the imported images as data properties
      maleImage: male,
      femaleImage: female,
      organizationImage: organization,
      mapImage: map
    }
  },
  methods: {
    getProfileImage(result) {
      if (result.gender.toLowerCase() == 'male') {
        return this.maleImage // Use the male image
      } else {
        return this.femaleImage // Use the female image by default
      }
    }
  }
}
</script>
