<script setup>
const { currentLanguage } = useLanguage()
</script>

<template>
  <nav>
    <NuxtLink :to="currentLanguage === 'en' ? '/en' : '/'">VAELLO</NuxtLink>
    <div>
      <SiteMenu />
      <SiteLanguages />
    </div>
  </nav>
</template>

<style>

</style>