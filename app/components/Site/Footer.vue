<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()
</script>

<template>
  <footer class="p-3.5 lg:p-9 flex flex-col gap-site text-xxs lg:text-smbase mt-10 lg:mt-20">
    <div class="grid grid-cols-2 xl:grid-cols-6 gap-9 lg:gap-site">
      <div v-for="column in global?.footer_columns" :key="column._uid">
        <h3 class="font-bold mb-3 lg:mb-5 text-xxxs lg:text-smbase">{{ column.label }}</h3>
        <ul class="text-xxs lg:text-smbase">
          <li v-for="item in column.items" :key="item._uid">
            <NuxtLink
              :to="internalLink(item.link)"
              :target="target(item.link)"
              class="block"
              :class="{
                'text-xxxs lg:text-smbase border border-gray-100 text-center p-2 mt-4': item.link.linktype === 'email',
                'to-underlined py-px lg:py-0.5': item.link.linktype !== 'email'
              }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <UtilsRichText :content="global?.footer_text" class="text-xxxs lg:text-smbase uppercase mt-10 lg:mt-20 pe-10 lg:pe-0" />
  </footer>
</template>

<style>

</style>