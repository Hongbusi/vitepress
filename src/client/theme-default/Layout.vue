<script setup lang="ts">
import { provide } from 'vue'
import { useSidebar, useCloseSidebarOnEscape } from './composables/sidebar'
import VPSkipLink from './components/VPSkipLink.vue'
import VPBackdrop from './components/VPBackdrop.vue'
import VPNav from './components/VPNav.vue'
import VPLocalNav from './components/VPLocalNav.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPContent from './components/VPContent.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)
</script>

<template>
  <div class="Layout">
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" />
    <VPContent />
  </div>
<!--   <div class="theme" :class="pageClasses">
    <NavBar v-if="showNavbar" @toggle="toggleSidebar">
      <template #search>
        <slot name="navbar-search">
          <AlgoliaSearchBox
            v-if="theme.algolia"
            :options="theme.algolia"
            :multilang="isMultiLang"
          />
        </slot>
      </template>
    </NavBar>

    <SideBar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Content v-if="isCustomLayout" />

    <template v-else-if="enableHome">
      <slot name="home">
        <Home>
          <template #hero>
            <slot name="home-hero" />
          </template>
          <template #features>
            <slot name="home-features" />
          </template>
          <template #footer>
            <slot name="home-footer" />
          </template>
        </Home>
      </slot>
    </template>

    <Page v-else>
      <template #top>
        <slot name="page-top-ads">
          <div
            id="ads-container"
            v-if="theme.carbonAds && theme.carbonAds.carbon"
          >
            <CarbonAds
              :key="'carbon' + page.relativePath"
              :code="theme.carbonAds.carbon"
              :placement="theme.carbonAds.placement"
            />
          </div>
        </slot>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <slot name="page-bottom-ads">
          <BuySellAds
            v-if="theme.carbonAds && theme.carbonAds.custom"
            :key="'custom' + page.relativePath"
            :code="theme.carbonAds.custom"
            :placement="theme.carbonAds.placement"
          />
        </slot>
      </template>
    </Page>
  </div>

  <Debug /> -->
</template>

<style scoped lang="postcss">
</style>
