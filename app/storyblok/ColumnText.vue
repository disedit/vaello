<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="min-h-[50svh] bg-beige flex p-10 lg:p-20 items-end text-sm lg:text-smbase text-justify hyphens-auto lg:hyphens-none leading-tight">
    <UtilsRichText :content="blok.text" />
  </div>
</template>