<script lang="ts" setup>
const emit = defineEmits(['click'])
const { locales, locale } = useI18n()
</script>

<template>
  <ul aria-label="Languages" class="text-sm flex">
    <li
      v-for="language in locales"
      :key="language.code"
    >
      <NuxtLink
        :to="$switchLocalePath(language.code)"
        :class="{ 'font-bold': language.code === locale }"
        class="uppercase to-underlined"
        @click="emit('click')"
      >
        {{ language.code }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
li:not(:last-child)::after {
  content: '/';
  margin-inline: .25em;
}
</style>