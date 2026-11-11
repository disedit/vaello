<script setup>
const props = defineProps({ blok: Object, index: Number, total: Number })
</script>

<template>
  <article v-editable="blok">
    <div
      class="sticky top-nav lg:top-[15vh] text-xs lg:text-smbase leading-tight flex flex-col z-200 px-10 py-20 lg:px-site lg:py-45"
      :class="{'mb-[15vh] lg:pt-20!': index === 0 }"
    >
      <h2 class="lg:absolute text-center lg:text-left mb-2">
        {{ blok.title }}
      </h2>
      <UtilsRichText
        :content="blok.text"
        spaced-paragraphs
        class="max-w-142 mx-auto text-justify"
        :class="blok.invert_colors ? 'text-white mix-blend-difference' : ''"
      />
      <p class="hidden lg:block lg:absolute text-right right-site">
        {{ index + 1 }} / {{ total }}
      </p>
    </div>
    <div class="max-w-210 mx-auto grid gap-2 lg:gap-site p-site lg:p-0">
      <StoryblokComponent
        v-for="component in blok.blocks"
        :key="component._uid"
        :blok="component"
        sticky-sections
      />
    </div>
  </article>
</template>
