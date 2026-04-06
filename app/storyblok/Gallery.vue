<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="lg:px-site lg:py-30"
  >
    <div class="grid grid-cols-2 gap-2 lg:gap-6 max-w-200 mx-auto">
      <UtilsMedia
        v-for="media in blok.media"
        :key="media._uid"
        :media="media"
        sizes="800px"
        class="w-full aspect-[0.66] lg:aspect-[0.78] object-cover"
      />
    </div>
  </section>
</template>

