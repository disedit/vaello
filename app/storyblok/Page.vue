<script setup>
const props = defineProps({ blok: Object })

useHead({
  bodyAttrs: {
    class: `logo-${props.blok.logo_color_mobile} lg:logo-${props.blok.logo_color}`,
  },
})
</script>

<template>
  <main
    v-editable="blok"
    class="min-h-svh pb-1"
    :class="{
      'lg:pt-nav': blok.nav_padding,
      'pt-nav': blok.nav_padding_mobile,
      'lg:pt-0': !blok.nav_padding,
    }">
    <h1 class="sr-only">{{ blok.title }}</h1>
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
