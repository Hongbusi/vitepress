<script lang="ts" setup>
import { useRoute, useData } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import NotFound from '../NotFound.vue'
// import VPContentPage from './VPContentPage.vue'
import VPContentDoc from './VPContentDoc.vue'

const route = useRoute()
const { frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <div
    class="VPContent"
    id="VPContent"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <NotFound v-if="route.component === NotFound" />
<!--     <VPContentPage v-else-if="!!frontmatter.page">
      <template #footer-before><slot name="footer-before" /></template>
      <template #footer-after><slot name="footer-after" /></template>
    </VPContentPage> -->
    <VPContentDoc v-else :class="{ 'has-sidebar': hasSidebar }" />
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .VPContent {
    overflow-x: hidden;
  }
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: var(--vp-nav-height-desktop);
  }

  .VPContent.has-sidebar {
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}
</style>
