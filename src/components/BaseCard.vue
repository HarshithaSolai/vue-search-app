<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <div class="flex flex-row justify-center items-center">
      <img loading="lazy" class="object-cover h-full w-[160px]" :src="imageSrc" :alt="altText" />
    </div>
    <div class="flex flex-col sm:items-start sm:justify-between">
      <h3 data-testid="title" class="font-bold text-xl text-abn-green hover:underline">
        <router-link :to="linkTo">{{ title }}</router-link>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    altText: String,
    title: String,
    linkTo: Object
  }
}
</script>
