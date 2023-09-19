<template>
  <BaseCard
    :image-src="getProfileImage(result)"
    :alt-text="result.first_name"
    :title="computedTitle"
    :link-to="{ name: 'info' }"
  >
    <p data-testid="first_name">
      <span class="font-bold">First Name: </span>{{ result.first_name }}
    </p>
    <p data-testid="last_name"><span class="font-bold">Last Name: </span>{{ result.last_name }}</p>
    <p data-testid="gender"><span class="font-bold">Gender:</span> {{ result.gender }}</p>
    <p data-testid="email"><span class="font-bold">Email: </span>{{ result.email }}</p>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue'
import female from '../assets/images/female.png'
import male from '../assets/images/male.png'

export default {
  props: {
    result: Object
  },
  components: {
    BaseCard
  },
  computed: {
    computedTitle() {
      return `${this.result.first_name} ${this.result.last_name}`
    }
  },
  methods: {
    getProfileImage(result) {
      const { gender } = result
      return gender.toLowerCase() === 'male' ? male : female
    }
  }
}
</script>
