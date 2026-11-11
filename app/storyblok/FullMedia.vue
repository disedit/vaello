<script setup>
const props = defineProps({ blok: Object })
const { inner, freezeStyle } = useFreezable()
</script>

<template>
  <section v-editable="blok" class="freezable" :style="freezeStyle">
    <div ref="inner" class="freezable-inner">
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
