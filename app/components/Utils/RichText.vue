<script setup>
defineProps({
  content: { type: Object, required: true },
  tag: { type: String, default: 'div' },
  spacedParagraphs: { type: Boolean, default: false },
})
</script>

<template>
  <Component :is="tag" :class="['prose', { 'spaced-paragraphs': spacedParagraphs }]">
    <StoryblokRichText :document="content" />
  </Component>
</template>