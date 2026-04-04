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
    class="p-site grid gap-4 lg:mt-6"
  >
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
    <div :id="`expandable-${blok._uid}`" class="grid grid-cols-3 lg:grid-cols-6 grid-flow-dense gap-2 lg:gap-4 -mx-site">
      <StoryblokComponent
        v-for="component in blok.blocks"
        :key="component._uid"
        :blok="component"
        :expanded="expanded"
      />
    </div>
  </section>
</template>
