<script setup>
const props = defineProps({ blok: Object, sizes: { type: String, default: '400px' } })
const { internalLink } = useLinks()
const tag = computed(() => props.blok.link ? resolveComponent('NuxtLink') : 'article')
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    :to="tag !== 'article' ? internalLink(blok.link) : null"
    class="group relative aspect-[0.66] text-(--text-color) bg-(--background-color) flex"
    :class="[`text-color-${blok.text_color}`, `background-color-${blok.background_color}`]">
    <UtilsMedia
      :media="blok.media"
      :sizes="sizes"
      class="object-cover h-full w-full aspect-[0.66]"
      :class="{ 'grayscale': blok.grayscale }"
    />
    <div
      v-if="blok.text"
      class="absolute text-xxs lg:text-sm p-site"
      :class="{ 'opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out': blok.reveal_text_on_hover }"
    >
      {{ blok.text }}
    </div>
  </Component>
</template>
