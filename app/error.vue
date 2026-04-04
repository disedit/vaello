<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class="p-site h-dvh flex flex-col font-sans text-base md:text-md gap-site">
    <NuxtLink
      to="/"
      class="text-base lg:text-basemd"
    >
        VAELLO
      </NuxtLink>
    <div class="text-3xl leading-none">
      <div>{{ error.statusCode }}</div>
      <h1>{{ error.message }}</h1>
    </div>

    <div class="mt-auto">
      <NuxtLink to="/" class="underlined">BACK</NuxtLink>
    </div>
  </div>
</template>