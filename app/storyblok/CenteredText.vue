<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="text-sm lg:text-smbase text-justify hyphens-auto lg:hyphens-none leading-tight">
    <UtilsRichText :content="blok.text" class="p-10 lg:p-20 lg:max-w-[50%] mx-auto" />
  </section>
</template>
