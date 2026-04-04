<script setup>
const props = defineProps({ blok: Object, first: Boolean })
</script>

<template>
  <article
    v-editable="blok"
    :class="{ 'lg:mt-20': !first }"
  >
    <div class="sticky text-xs lg:text-smbase leading-tight flex flex-col z-200 p-10 lg:px-site lg:py-20" :class="{ 'top-nav lg:top-[15vh]': first, 'top-[15vh]': !first }">
      <h2 class="lg:absolute text-center lg:text-left mb-2">{{ blok.title }}</h2>
      <p class="max-w-142 mx-auto text-justify">{{ blok.text }}</p>
    </div>
    <div class="max-w-210 mx-auto grid gap-2 lg:gap-site p-site lg:p-0" :class="{ 'lg:-mt-180': first }">
      <StoryblokComponent
        v-for="component in blok.blocks"
        :key="component._uid"
        :blok="component"
        sticky-sections
      />
    </div>
  </article>
</template>
