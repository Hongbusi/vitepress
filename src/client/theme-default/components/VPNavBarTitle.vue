<script setup lang="ts">
import { useData } from 'vitepress'

const { site, theme } = useData()
</script>

<template>
  <a class="VPNavBarTitle" href="/">
    <img v-if="theme.logo" class="logo" :src="theme.logo" :alt="site.title">
    {{ site.title }}
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height-mobile);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

@media (min-width: 960px) {
  .VPNavBarTitle {
    width: calc(var(--vp-sidebar-width) - 32px);
    height: var(--vp-nav-height-desktop);
  }
}

.logo {
  margin-right: 8px;
  height: 24px;
}
</style>
