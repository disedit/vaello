<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="freezable">
    <div class="freezable-inner px-site pt-0 grid lg:grid-cols-2 gap-4 lg:gap-site">
      <div class="bento grid grid-cols-2 gap-2 lg:gap-site col-1 row-2 lg:col-auto lg:row-auto">
        <UtilsMedia
          v-for="media in blok.media"
          :key="media._uid"
          :media="media"
          sizes="500px"
          class="w-full"
        />
      </div>
      <div class="col-1 row-1 lg:row-auto lg:col-auto">
        <div class="lg:sticky top-0 lg:h-svh flex items-center bento-text p-10 lg:p-0">
          <UtilsRichText :content="blok.text" spaced-paragraphs class="max-w-132 mx-auto text-xs lg:text-smbase leading-tight" />
        </div>
      </div>
    </div>
  </section>
</template>

