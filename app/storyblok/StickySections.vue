<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="sticky-sections">
    <div class="sticky-sections-inner">
      <StoryblokComponent
        v-for="(component, i) in blok.sections"
        :key="component._uid"
        :blok="component"
        :index="i"
        :total="blok.sections.length"
      />
    </div>
  </section>
</template>

<style>
.sticky-sections:has(+ .sticky-centered-text)::before {
  content: '';
  display: block;
  height: 100vh;
}

.sticky-sections:has(+ .sticky-centered-text) > .sticky-sections-inner {
  position: sticky;
  bottom: 0;
}

.sticky-sections + .sticky-centered-text {
  z-index: 10;
  margin-top: -100vh;
}
</style>
