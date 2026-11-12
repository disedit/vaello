<script setup>
defineProps({ show: Boolean })

const emit = defineEmits(['close'])

const settings = await useSettings()
const global = computed(() => settings.value?.data?.story?.content)
const { internalLink, target } = useLinks()

const submenu = ref(null)

function toggleSubmenu(uid) {
  submenu.value = submenu.value === uid ? null : uid
}

const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { y: '-100%' })
}

function onEnter(el, done) {
  timeline = $gsap.timeline()

  timeline.to(el, {
    y: 0,
    duration: .5,
    ease: 'power4.out',
  }).call(done)
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to(el, {
    y: '-100%',
    duration: .5,
    ease: 'power4.in'
  }).call(done)
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <Transition
    @before-enter="beforeEnter"
    @enter="onEnter"
    @enter-cancelled="onEnterCancelled"
    @leave="onLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <div v-if="show" class="lg:hidden bg-white pt-15 fixed z-900 top-0 left-0 right-0">
      <ul aria-label="Main menu" class="text-xs flex flex-col top-5 border-t border-gray-100">
        <li
          v-for="item in global?.menu"
          :key="item._uid"
          class="border-b border-gray-100"
        >
          <a
            v-if="item.component === 'Submenu'"
            href="#"
            class="p-site flex justify-between items-center"
            @click.prevent="toggleSubmenu(item._uid)"
          >
            {{ item.label }}
            <IconsChev class="h-4 w-5 transition ease-in-out duration-500" :class="{ '-scale-y-100': submenu !== item._uid }" />
          </a>
          <NuxtLink
            v-else
            :to="internalLink(item.link)"
            :target="target(item.link)"
            class="p-site flex"
            @click="emit('close')"
          >
            {{ item.label }}
          </NuxtLink>
          <Transition name="menu">
            <ul v-if="submenu === item._uid && item.component === 'Submenu'" class="flex flex-col">
              <li
                v-for="subitem in item.items"
                :key="subitem._uid"
                class="border-t border-gray-100"
              >
                <NuxtLink
                  :to="internalLink(subitem.link)"
                  :target="target(subitem.link)"
                  class="uppercase flex p-site"
                  @click="emit('close')"
                >
                  {{ subitem.label }}
                </NuxtLink>
              </li>
            </ul>
          </Transition>
        </li>
      </ul>
      <div class="p-site flex justify-end">
        <SiteLanguages @click="emit('close')" />
      </div>
    </div>
  </Transition>
</template>