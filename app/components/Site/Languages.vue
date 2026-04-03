<script lang="ts" setup>
const { languages, currentLanguage, switchLanguage } = useLanguage()
</script>

<template>
  <ul aria-label="Languages" class="text-sm flex">
    <li
      v-for="language in languages"
      :key="language.code"
    >
      <NuxtLink
        :to="switchLanguage(language.code)"
        :class="{ 'font-bold': language.code === currentLanguage }"
        class="uppercase to-underlined"
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