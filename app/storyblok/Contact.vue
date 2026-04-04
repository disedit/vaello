<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="contact flex min-h-[calc(100svh-var(--spacing-nav))] items-center justify-center p-site">
    <div>
      <div class="grid md:grid-cols-2 max-w-236 mx-auto gap-12">
        <UtilsRichText :content="blok.column1" spaced-paragraphs class="links-underlined text-sm lg:text-smbase leading-tight" />
        <UtilsRichText :content="blok.column2" spaced-paragraphs class="links-underlined text-sm lg:text-smbase leading-tight" />
      </div>
      <div class="flex flex-wrap justify-center gap-11 mt-32 text-sm">
        <a :href="`tel:${blok.tel}`" class="flex items-center gap-2 border border-gray-200 px-7">
          <strong>ES</strong> {{ blok.tel_nice }}
        </a>
        <a :href="blok.instagram" class="flex items-center gap-2 border border-gray-200 px-7 font-bold">
          <IconsInstagram class="h-[3em] w-auto" />
          Instagram``
        </a>
        <a :href="`https://wa.me/${blok.whatsapp}`" class="flex items-center gap-2 border border-gray-200 px-7 font-bold">
          <IconsWhatsapp class="h-[3em] w-auto" />
          Whatsapp
        </a>
        <a :href="`mailto:${blok.email}`" class="flex items-center gap-2 border border-gray-200 px-7">
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