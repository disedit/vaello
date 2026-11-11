<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="contact flex min-h-[calc(100svh-var(--spacing-nav)-4rem)] items-center justify-center p-site">
    <div class="px-11 lg:px-0">
      <div class="grid md:grid-cols-2 max-w-236 mx-auto gap-18 lg:gap-12">
        <UtilsRichText :content="blok.column1" spaced-paragraphs class="links-underlined text-xs lg:text-smbase leading-tight" />
        <UtilsRichText :content="blok.column2" spaced-paragraphs class="links-underlined text-xs lg:text-smbase leading-tight" />
      </div>
      <div class="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 lg:gap-11 mt-32 text-xxxs lg:text-sm">
        <a :href="`tel:${blok.tel}`" class="flex items-center gap-1 border border-gray-200 px-3 lg:px-7 py-1 h-8 lg:h-10 row-1 col-1 w-fit">
          <strong>ES</strong> {{ blok.tel_nice }}
        </a>
        <a :href="blok.instagram" class="flex items-center gap-3 border border-gray-200 px-3 lg:px-6 font-bold h-8 lg:h-10 row-1 col-2 w-fit">
          <IconsInstagram class="h-[2em] w-auto" />
          Instagram
        </a>
        <a :href="`https://wa.me/${blok.whatsapp}`" class="flex items-center gap-3 border border-gray-200 px-3 lg:px-6 font-bold h-8 lg:h-10 row-2 col-2 w-fit">
          <IconsWhatsapp class="h-[2em] w-auto" />
          Whatsapp
        </a>
        <a :href="`mailto:${blok.email}`" class="flex items-center gap-2 border border-gray-200 px-3 lg:px-7 h-8 lg:h-10 row-2 col-1 w-fit">
          {{ blok.email_text }}
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.contact h2 {
  font-size: var(--text-smbase);
  font-weight: bold;
  margin-block-end: 0.75em;
}
</style>