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
    class="grid gap-2 lg:gap-4 lg:px-4"
    :class="{
      'lg:grid-cols-2': blok.max_columns == 2,
      'lg:grid-cols-3': blok.max_columns == 3,
      'lg:grid-cols-4': blok.max_columns == 4,
      'grid-cols-2': blok.max_columns_mobile == 2,
      'grid-cols-3': blok.max_columns_mobile == 3,
      'p-site': blok.padding_on_mobile,
      'py-2 lg:py-4': !blok.padding_on_mobile,
    }">
    <StoryblokComponent
      v-for="component in blok.items"
      :key="component._uid"
      :blok="component"
      :sizes="items >= 4 ? sizes.default : sizes[items]"
    />
  </section>
</template>
