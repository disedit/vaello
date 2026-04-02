<script lang="ts" setup>
const { languages, currentLanguage, switchLanguage } = useLanguage()
</script>

<template>
  <ul aria-label="Languages">
    <li
      v-for="language in languages"
      :key="language.code"
    >
      <NuxtLink
        :to="switchLanguage(language.code)"
        :class="{ 'font-bold': language.code === currentLanguage }"
        class="uppercase"
      >
        {{ language.code }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style>

</style>