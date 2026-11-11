<script setup>
const props = defineProps({ blok: Object, expanded: Boolean })
const tag = props.blok.popover_text ? 'button' : 'article'
const popoverId = `popover-${props.blok._uid}`
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    class="bento-card group flex flex-col gap-site text-left"
    :class="[
      `text-color-${blok.text_color}`,
      `background-color-${blok.background_color}`,
      {
        'cursor-pointer': blok.popover_text,
        'lg:col-span-2': blok.span_col && !expanded,
        'lg:row-span-2': blok.span_row && !expanded,
      }
    ]"
    :type="tag === 'button' ? 'button' : null"
    :popovertarget="tag === 'button' ? popoverId : null"
    :style="{
      'view-transition-name': `bento-card-${blok._uid}`
    }"
  >
    <div class="relative flex h-full w-full text-(--text-color) bg-(--background-color)">
      <UtilsMedia
        :media="blok.media"
        sizes="500px"
        class="object-cover h-full w-full"
        :class="{ 'grayscale': blok.grayscale, 'aspect-[0.8]': !blok.span_col && !blok.span_row, 'absolute inset-0': blok.span_col || blok.span_row }"
      />
      <div
        v-if="blok.hover_text"
        class="absolute text-xxs lg:text-sm p-site opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
      >
        {{ blok.hover_text }}
      </div>
    </div>
  </Component>

  <div
    v-if="blok.popover_text"
    :id="popoverId"
    popover="auto"
    class="fixed top-[50%] left-[50%] z-50 w-full max-w-[min(90vw,46rem)] bg-white p-18"
  >
    <button
      type="button"
      :popovertarget="popoverId"
      popovertargetaction="hide"
      class="absolute top-site right-site flex h-8 w-8 items-center justify-center cursor-pointer"
      aria-label="Close popover"
    >
      <IconsClose class="h-4 w-4" />
    </button>

    <div class="text-sm font-bold mb-4 text-center">
      {{ blok.popover_heading }}
    </div>

    <div class="text-smbase text-justify">
      {{ blok.popover_text }}
    </div>
  </div>
</template>

<style scoped>
:root:has([popover]:popover-open) .bento-card {
  pointer-events: none;
}

[popover] {
  opacity: 0;
  transform: translate(-50%, calc(-50% + 0.75rem));
  transition:
    opacity 250ms ease,
    transform 250ms ease,
    overlay 250ms ease allow-discrete,
    display 250ms ease allow-discrete;
}

[popover]:popover-open {
  opacity: 1;
  transform: translate(-50%, -50%);
}

[popover]::backdrop {
  backdrop-filter: blur(0);
  transition:
    background-color 250ms ease,
    backdrop-filter 250ms ease,
    overlay 250ms ease allow-discrete,
    display 250ms ease allow-discrete;
}

[popover]:popover-open::backdrop {
  backdrop-filter: blur(10px);
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 0.75rem));
  }

  [popover]:popover-open::backdrop {
    backdrop-filter: blur(0);
  }
}
</style>
