<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <div class="flex flex-row justify-center items-center">
      <img
        loading="lazy"
        class="object-cover h-full w-[160px]"
        :src="getProfileImage(result)"
        :alt="result.first_name"
      />
    </div>
    <div class="flex flex-col sm:items-start sm:justify-between">
      <h3 data-testid="people_title" class="font-bold text-xl text-abn-green hover:underline">
        <router-link :to="{ name: 'info' }"
          >{{ result.first_name }} {{ result.last_name }}</router-link
        >
      </h3>
      <p data-testid="first_name">
        <span class="font-bold">First Name: </span>{{ result.first_name }}
      </p>
      <p data-testid="last_name">
        <span class="font-bold">Last Name: </span>{{ result.last_name }}
      </p>
      <p data-testid="gender"><span class="font-bold">Gender:</span> {{ result.gender }}</p>
      <p data-testid="email"><span class="font-bold">Email: </span>{{ result.email }}</p>
    </div>
  </div>
</template>

<script>
import female from '../assets/images/female.png'
import male from '../assets/images/male.png'

export default {
  props: {
    result: Object
  },
  methods: {
    getProfileImage(result) {
      const { gender } = result
      return gender.toLowerCase() === 'male' ? male : female
    }
  }
}
</script>
