<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="sticky-sections">
    <StoryblokComponent
      v-for="(component, i) in blok.sections"
      :key="component._uid"
      :blok="component"
      :first="i === 0"
    />
  </section>
</template>
