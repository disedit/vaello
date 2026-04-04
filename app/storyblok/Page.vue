<script setup>
const props = defineProps({ blok: Object })

useHead({
  bodyAttrs: {
    class: props.blok.logo_color === 'white' ? 'logo-white' : 'logo-black',
  },
})
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
