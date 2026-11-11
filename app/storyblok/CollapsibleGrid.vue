<script setup>
defineProps({ blok: Object })
const expanded = ref(false)

const toggle = async () => {
  if (typeof document === 'undefined' || !document.startViewTransition) {
    expanded.value = !expanded.value
    return
  }

  document.startViewTransition(async () => {
    expanded.value = !expanded.value
    await nextTick()
  })
}
</script>

<template>
  <section
    v-editable="blok"
    class="px-site grid gap-site mt-[calc(--spacing(9)+var(--spacing-site))] lg:mt-site mb-site"
  >
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-site text-xxs lg:text-sm leading-none">
      <h2 class="lg:col-span-2">
        {{ blok.heading }}
      </h2>
      <button
        @click="toggle"
        :aria-expanded="expanded ? 'true' : 'false'"
        :aria-controls="`expandable-${blok._uid}`"
        class="cursor-pointer text-left"
      >
        {{ expanded ? '[ - ]' : '[ + ]' }}
      </button>
    </div>
    <div :id="`expandable-${blok._uid}`" class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-site -mx-site lg:mx-0">
      <StoryblokComponent
        v-for="(component, i) in blok.blocks"
        :key="component._uid"
        :blok="component"
        :class="{
          'hidden': i > 3 && !expanded,
          'lg:hidden': i === 3 && !expanded,
        }"
        :style="{
          'view-transition-name': `item-${i}`
        }"
        hide-heading-on-mobile
      />
    </div>
  </section>
</template>

