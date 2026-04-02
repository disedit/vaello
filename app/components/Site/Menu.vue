<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()
</script>

<template>
  <ul aria-label="Main menu">
    <li v-for="item in global?.menu" :key="item._uid">
      <a
        v-if="item.component === 'Submenu'"
        href="#"
      >
        {{ item.label }}
      </a>
      <NuxtLink
        v-else
        :to="internalLink(item.link)"
        :target="target(item.link)"
      >
        {{ item.label }}
      </NuxtLink>
      <ul v-if="item.component === 'Submenu'">
        <li
          v-for="subitem in item.items"
          :key="subitem._uid"
        >
          <NuxtLink
            :to="internalLink(subitem.link)"
            :target="target(subitem.link)"
          >
            {{ subitem.label }}
            <NuxtImg
              v-if="subitem.image?.filename"
              :src="subitem.image.filename"
              :alt="subitem.image.alt || subitem.label"
            />
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style>

</style>