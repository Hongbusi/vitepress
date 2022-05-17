<script setup lang="ts">
import { provide } from 'vue'
import { useNav } from '../composables/nav'
// import { useSidebar } from '../composables/sidebar'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
// const { hasSidebar } = useSidebar()

provide('close-screen', closeScreen)
</script>

<template>
  <header class="VPNav">
  <!-- <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }"> -->
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<style scoped>
.VPNav {
  position: relative;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-nav);
  width: 100%;
}

@media (min-width: 1280px) {
  .VPNav {
    position: fixed;
  }
}
</style>
