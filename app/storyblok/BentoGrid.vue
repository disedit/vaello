<script setup>
const props = defineProps({ blok: Object })
const expanded = ref(false)

// When closed, show at most `max_when_closed` items (all of them if it's empty)
const visibleBlocks = computed(() => {
  const max = parseInt(props.blok.max_when_closed)
  if (expanded.value || !max) return props.blok.blocks
  return props.blok.blocks.slice(0, max)
})

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
const { inner, freezeStyle } = useFreezable()
</script>

<template>
  <section
    v-editable="blok"
    class="freezable lg:mt-6"
    :style="freezeStyle"
  >
    <div ref="inner" class="freezable-inner px-site grid gap-4 pb-site">
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 text-xxs lg:text-sm leading-none">
        <h2 class="col-span-2">
          {{ blok.heading1 }}
        </h2>
        <div class="hidden lg:block lg:col-span-3">
          {{ blok.heading2 }}
        </div>
        <button
          @click="toggle"
          :aria-expanded="expanded ? 'true' : 'false'"
          :aria-controls="`expandable-${blok._uid}`"
          class="cursor-pointer text-left"
        >
          {{ expanded ? '[ - ]' : '[ + ]' }}
        </button>
      </div>
      <div :id="`expandable-${blok._uid}`" class="grid grid-cols-3 lg:grid-cols-6 grid-flow-dense gap-2 lg:gap-4 -mx-site lg:mx-0">
        <StoryblokComponent
          v-for="component in visibleBlocks"
          :key="component._uid"
          :blok="component"
          :expanded="expanded"
        />
      </div>
    </div>
  </section>
</template>
