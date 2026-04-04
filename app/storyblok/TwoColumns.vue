<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="min-h-svh grid lg:grid-cols-2">
    <StoryblokComponent
      v-for="(component, index) in blok.columns"
      :key="component._uid"
      :blok="component"
      :class="{
        'row-1 lg:row-auto': index === 1 && blok.invert_on_mobile,
        'row-2 lg:row-auto': index === 0 && blok.invert_on_mobile,
      }"
    />
  </section>
</template>
