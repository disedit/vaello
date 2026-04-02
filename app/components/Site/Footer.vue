<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()
</script>

<template>
  <footer class="p-site flex flex-col gap-site">
    <div class="grid grid-cols-2 xl:grid-cols-6 gap-site">
      <div v-for="column in global?.footer_columns" :key="column._uid">
        <h3 class="font-bold">{{ column.label }}</h3>
        <ul>
          <li v-for="item in column.items" :key="item._uid">
            <NuxtLink
              :to="internalLink(item.link)"
              :target="target(item.link)"
              class="to-underlined"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <UtilsRichText :content="global?.footer_text" class="uppercase" />
  </footer>
</template>

<style>

</style>