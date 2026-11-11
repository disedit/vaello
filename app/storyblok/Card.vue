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
      <UtilsMedia
        v-if="blok.media_hover?.filename"
        :media="blok.media_hover"
        :sizes="sizes"
        aria-hidden="true"
        class="absolute inset-0 object-cover h-full w-full opacity-0 group-hover:opacity-100"
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
      class="flex-col gap-2 text-xs lg:text-sm 2xl:text-smbase"
      :class="{
        'hidden lg:flex mb-8': hideHeadingOnMobile,
        'flex p-8 lg:p-0 lg:mb-8': !hideHeadingOnMobile
      }"
    >
      <h3 v-if="blok.heading" class="leading-none">
        {{ blok.heading }}
      </h3>
      <p v-if="blok.description" class="text-justify">
        {{ blok.description }}
      </p>
    </div>
  </Component>
</template>
