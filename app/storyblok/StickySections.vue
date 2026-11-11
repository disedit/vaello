<script setup>
const props = defineProps({ blok: Object })
const { inner, freezeStyle } = useFreezable()
</script>

<template>
  <section v-editable="blok" class="sticky-sections freezable" :style="freezeStyle">
    <div ref="inner" class="freezable-inner">
      <StoryblokComponent
        v-for="(component, i) in blok.sections"
        :key="component._uid"
        :blok="component"
        :index="i"
        :total="blok.sections.length"
      />
    </div>
  </section>
</template>

