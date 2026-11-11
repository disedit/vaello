<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="sticky-centered-text relative isolate bg-white min-h-dvh">
    <div class="relative bento-text py-20 p-10 lg:p-24 z-110">
      <UtilsRichText
        :content="blok.text"
        spaced-paragraphs
        class="max-w-142 mx-auto text-xs lg:text-smbase leading-tight"
        :class="blok.invert_colors ? 'text-white mix-blend-difference' : ''"
      />
    </div>
    <div class="relative z-100">
      <StoryblokComponent
        v-for="component in blok.blocks"
        :key="component._uid"
        :blok="component"
      />
    </div>
  </section>
</template>

