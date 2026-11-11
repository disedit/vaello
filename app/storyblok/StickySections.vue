<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="sticky-sections freezable">
    <div class="freezable-inner">
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

