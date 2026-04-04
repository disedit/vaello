<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const tag = computed(() => props.blok.link ? resolveComponent('NuxtLink') : 'div')
</script>

<template>
  <Component
    :is="tag"
    :to="tag !== 'div' ? internalLink(blok.link) : null"
    class="relative flex min-h-[50svh]"
  >
    <UtilsMedia
      :media="blok.media"
      sizes="800px"
      class="object-cover h-full w-full"
    />
    <div
      v-if="blok.text"
      class="absolute bottom-0 left-0 p-site text-xxs lg:text-smbase text-(--text-color)"
      :style="{ '--text-color': blok.text_color }"
    >
      {{ blok.text }}
    </div>
  </Component>
</template>