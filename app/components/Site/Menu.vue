<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()

const emit = defineEmits(['open', 'close'])

const submenu = ref(null)
const backdrop = ref(false)

function setSubmenu(uid) {
  submenu.value = uid
  emit('open')
}

function unsetSubmenu() {
  submenu.value = null
  emit('close')
}

const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { y: '-100%' })
}

function onEnter(el, done) {
  $gsap.set('.submenu-item', { x: '-5%', opacity: 0 })
  timeline = $gsap.timeline()

  timeline.to(el, {
    y: 0,
    duration: .5,
    ease: 'power4.out',
  }).to('.submenu-item', {
    x: 0,
    opacity: 1,
    duration: .25,
    ease: 'power4.out',
    stagger: .1
  }, '-=.3').call(done)
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to('.submenu-item', {
    x: '5%',
    opacity: 0,
    duration: .25,
    stagger: {
      amount: .25,
      from: 'end'
    },
  }).to(el, {
    y: '-100%',
    duration: .5,
    ease: 'power4.in'
  }, '-=.5').call(done)
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <ul aria-label="Main menu" class="text-sm flex" @mouseenter="backdrop = true" @mouseleave="backdrop = false">
    <li v-for="item in global?.menu" :key="item._uid" @mouseenter="setSubmenu(item._uid)" @mouseleave="unsetSubmenu">
      <a
        v-if="item.component === 'Submenu'"
        href="#"
        class="hover:italic relative z-1100 p-2"
        :class="{ 'italic': submenu === item._uid }"
        @click.prevent="setSubmenu(item._uid)"
      >
        {{ item.label }}
      </a>
      <NuxtLink
        v-else
        :to="internalLink(item.link)"
        :target="target(item.link)"
        class="hover:italic relative z-1100 p-2"
        @click="backdrop = false"
      >
        {{ item.label }}
      </NuxtLink>
      <Transition
        @before-enter="beforeEnter"
        @enter="onEnter"
        @enter-cancelled="onEnterCancelled"
        @leave="onLeave"
        @leave-cancelled="onLeaveCancelled"
      >
        <div v-if="submenu === item._uid && item.component === 'Submenu'" class="fixed bg-white top-0 left-0 right-0 p-site z-1050 pt-nav">
          <ul class="flex justify-end gap-site mt-12">
            <li
              v-for="subitem in item.items"
              :key="subitem._uid"
              class="w-[17vw] submenu-item"
            >
              <NuxtLink
                :to="internalLink(subitem.link)"
                :target="target(subitem.link)"
                class="uppercase"
                @click="unsetSubmenu"
              >
                <div class="mb-1">{{ subitem.label }}</div>
                <NuxtImg
                  v-if="subitem.image?.filename"
                  :src="subitem.image.filename"
                  :alt="subitem.image.alt || subitem.label"
                  class="aspect-[0.8] w-full object-cover"
                  sizes="800px"
                  :preload="{ fetchPriority: 'high' }"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </li>
  </ul>
  <Teleport to="#teleports">
    <Transition name="fade">
      <div
        v-if="backdrop"
        class="fixed inset-0 z-900 backdrop-blur-lg"
        @click="unsetSubmenu"
      />
    </Transition>
  </Teleport>
  <div class="sr-only hidden lg:block" aria-hidden="true">
    <div v-for="item in global?.menu" :key="item._uid">
      <template v-for="subitem in item.items" :key="subitem._uid">
        <NuxtImg
          v-if="subitem.image?.filename"
          :src="subitem.image.filename"
          :alt="subitem.image.alt || subitem.label"
          class="aspect-[0.8] w-full object-cover"
          sizes="800px"
          :preload="{ fetchPriority: 'high' }"
        />
      </template>
    </div>
  </div>
</template>
