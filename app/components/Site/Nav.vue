<script setup>
import { breakpointsTailwind } from '@vueuse/core'

const { currentLanguage } = useLanguage()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('xl')
const { y } = useWindowScroll()
const showNavbar = ref(true)
const lastScrollPosition = ref(0)
const menuActive = ref(false)
const mobileMenuOpen = ref(false)
const threshold = 100

watch(y, (currentScrollPosition) => {
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
})

const navCanHide = computed(() => {
  return !isMobile.value && !menuActive.value
})

const isScrolled = computed(() => {
  return y.value > threshold
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 p-site flex flex-col lg:flex-row lg:items-center lg:justify-between gap-site z-1000 transition duration-500 ease-out"
    :class="{ '-translate-y-full': !showNavbar && navCanHide, 'bg-white': isScrolled }"
  >
    <div
      class="relative z-1100 flex items-center gap-site justify-between transition-colors duration-500 ease-out"
      :class="{ 'text-(--logo-color)': !isScrolled && !mobileMenuOpen }"
    >
      <NuxtLink
        :to="currentLanguage === 'en' ? '/en' : '/'"
        class="text-base lg:text-basemd"
        @click="closeMobileMenu"
      >
        VAELLO
      </NuxtLink>
      <button
        @click="toggleMobileMenu"
        class="flex lg:hidden items-center justify-center"
        aria-label="Toggle menu"
        title="Menu"
      >
        <IconsMenu v-if="!mobileMenuOpen" class="h-5 w-5" />
        <IconsClose v-else class="h-4 w-4" />
      </button>
    </div>
    <SiteMobileMenu :show="mobileMenuOpen" @close="toggleMobileMenu" />
    <div class="hidden lg:flex items-center justify-between gap-site">
      <SiteMenu @open="menuActive = true" @close="menuActive = false" />
      <SiteLanguages class="relative z-1100" />
    </div>
  </nav>
  <Teleport to="#teleports">
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-900 backdrop-blur-lg"
        @click="closeMobileMenu"
      />
    </Transition>
  </Teleport>
</template>

<style>

</style>