<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="text-sm lg:text-smbase hyphens-auto lg:hyphens-none leading-tight">
    <UtilsRichText spaced-paragraphs :content="blok.text" class="p-10 lg:p-20 lg:max-w-[50%] mx-auto" />
  </section>
</template>
