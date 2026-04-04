<script setup>
const props = defineProps({
  blok: Object,
  sizes: { type: String, default: '400px' },
  hideHeadingOnMobile: { type: Boolean, default: false },
})
const { internalLink } = useLinks()
const tag = computed(() => props.blok.link ? resolveComponent('NuxtLink') : 'article')
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    :to="tag !== 'article' ? internalLink(blok.link) : null"
    class="group flex flex-col gap-site"
    :class="[`text-color-${blok.text_color}`, `background-color-${blok.background_color}`]">
    <div class="flex relative text-(--text-color) bg-(--background-color) ">
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
      <div
        v-if="blok.heading && hideHeadingOnMobile"
        class="lg:hidden absolute bottom-0 left-0 text-xxs lg:text-sm p-site leading-none"
        :class="{ 'opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out': blok.reveal_text_on_hover }"
      >
        {{ blok.heading }}
      </div>
    </div>
    <div
      v-if="blok.heading || blok.description"
      class="flex-col gap-2 text-xs lg:text-sm"
      :class="{
        'hidden lg:flex mb-6': hideHeadingOnMobile,
        'flex p-8 lg:p-0': !hideHeadingOnMobile
      }"
    >
      <h3 v-if="blok.heading" class="leading-none -mt-1">
        {{ blok.heading }}
      </h3>
      <p v-if="blok.description" class="text-justify">
        {{ blok.description }}
      </p>
    </div>
  </Component>
</template>
