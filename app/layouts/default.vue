<script setup>
useHead({
  htmlAttrs: { lang: 'es-ES', class: 'font-sans' },
  meta: [
    { name: 'theme-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'apple-mobile-web-app-title', content: 'Vaello' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' }
  ]
})
</script>

<template>
  <div class="bg-white">
    <NuxtLoadingIndicator color="#000" />
    <NuxtRouteAnnouncer />
    <SiteNav />
    <slot />
    <SiteFooter />
  </div>
</template>
