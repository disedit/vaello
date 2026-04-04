<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" :class="{ 'hidden lg:block': blok.view === 'desktop', 'block lg:hidden': blok.view === 'mobile' }">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
