<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main v-editable="blok" class="min-h-svh pb-1">
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
