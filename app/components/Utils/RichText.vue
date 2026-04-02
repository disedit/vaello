<script setup>
defineProps({
  content: { type: Object, required: true },
  tag: { type: String, default: 'div' }
})
</script>

<template>
  <Component :is="tag" class="prose">
    <StoryblokRichText :doc="content" />
  </Component>
</template>