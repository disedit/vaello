<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="freezable">
    <div class="freezable-inner">
      <UtilsMedia
        :media="blok.media"
        sizes="1500px"
        class="w-full"
        :class="{
          'h-svh object-cover': blok.viewport_height,
          'grayscale': blok.grayscale,
        }"
      />
    </div>
  </section>
</template>
