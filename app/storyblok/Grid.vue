<script setup>
const props = defineProps({ blok: Object })
const items = props.blok.items.length
const sizes = {
  2: '1000px',
  3: '800px',
  'default': '400px',
}
</script>

<template>
  <section
    v-editable="blok"
    class="grid gap-4 py-4 lg:px-4"
    :class="{
      'grid-cols-2': items === 2,
      'grid-cols-2 lg:grid-cols-3': items === 3,
      'grid-cols-2 lg:grid-cols-4': items >= 4,
    }">
    <StoryblokComponent
      v-for="component in blok.items"
      :key="component._uid"
      :blok="component"
      :sizes="items >= 4 ? sizes.default : sizes[items]"
    />
  </section>
</template>
