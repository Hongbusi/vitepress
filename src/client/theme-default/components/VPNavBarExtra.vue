<script lang="ts" setup>
import { useData } from 'vitepress'
import VPFlyout from './VPFlyout.vue'
import VPSwitchAppearance from './VPSwitchAppearance.vue'
import VPSocialLinks from './VPSocialLinks.vue'

const { theme } = useData()
</script>

<template>
  <VPFlyout class="VPNavBarExtra" label="extra navigation">
    <div class="group">
      <div class="item">
        <p class="label">Appearance</p>
        <div class="action">
          <VPSwitchAppearance />
        </div>
      </div>
    </div>

    <div v-if="theme.socialLinks" class="group">
      <div class="item">
        <VPSocialLinks class="social-links" :links="theme.socialLinks" />
      </div>
    </div>
  </VPFlyout>
</template>

<style scoped>
.VPNavBarExtra {
  display: none;
  margin-right: -12px;
}

@media (min-width: 768px) {
  .VPNavBarExtra {
    display: block;
  }
}

@media (min-width: 1280px) {
  .VPNavBarExtra {
    display: none;
  }
}

.item {
  display: flex;
  align-items: center;
}

.action {
  margin-right: -2px;
}

.social-links {
  margin: -4px -8px;
}
</style>
