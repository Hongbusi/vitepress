<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
// import VPContentDocOutline from './VPContentDocOutline.vue'
// import VPContentDocFooter from './VPContentDocFooter.vue'
// import VPCarbonAds from './VPCarbonAds.vue'
// import { VTLink, VTIconEdit } from '../../core'

const { theme, page, frontmatter } = useData()

const hashMatch = /#(\w+)$/

const repoUrl = computed(() => {
  const repo = theme.value.editLink?.repo || 'vuejs/docs'
  const branch = repo.match(hashMatch)?.[1] || 'main'
  return `https://github.com/${repo.split('#')[0]}/edit/${branch}/src/${page.value.relativePath}`
})

const pageName = computed(() => {
  const { relativePath } = page.value

  return relativePath.slice(0, relativePath.indexOf('/'))
})
</script>

<template>
  <div
    class="VPContentDoc"
    :class="{ 'has-aside': frontmatter.aside !== false }"
  >
    <div class="container">
      <div v-if="frontmatter.aside !== false" class="aside" >
        <div class="aside-container">
<!--           <VPContentDocOutline
            v-if="page.headers && frontmatter.outline !== false"
          /> -->
          <!-- <VPCarbonAds v-if="theme.carbonAds && frontmatter.ads !== false" /> -->
        </div>
      </div>

      <div class="content">
        <main class="main">
          <Content class="vp-doc" :class="pageName" />

          <p
            v-if="theme.editLink && frontmatter.editLink !== false"
            class="edit-link"
          >
            <!-- <VTIconEdit class="vt-icon" /> -->
            <!-- <VTLink :href="repoUrl" :no-icon="true">{{ theme.editLink.text }}</VTLink> -->
          </p>
        </main>
        <!-- <VPContentDocFooter v-if="frontmatter.footer !== false" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPContentDoc {
  padding: 48px 24px 96px;
}

@media (min-width: 768px) {
  .VPContentDoc {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .VPContentDoc {
    padding: 48px 64px 96px;
  }
}

@media (min-width: 1280px) {
  .VPContentDoc {
    padding: 64px 0 128px 64px;
  }

  .VPContentDoc:not(.has-sidebar.has-aside) {
    padding-left: calc((100vw - 688px) / 2);
  }

  .VPContentDoc.has-aside:not(.has-sidebar) {
    padding-left: calc((100vw - 688px - 320px) / 2);
  }

  .VPContentDoc:not(.has-aside) .content {
    min-width: 688px;
  }
}

@media (min-width: 1440px) {
  .VPContentDoc {
    padding: 64px 0 128px 96px;
  }
}

.aside {
  position: relative;
  display: none;
  flex-shrink: 0;
  padding-left: 64px;
  width: 320px;
}

@media (min-width: 1280px) {
  .aside {
    display: block;
    order: 2;
  }
}

@media (min-width: 1440px) {
  .aside {
    padding-left: 96px;
  }
}

.aside-container {
  position: sticky;
  width: 224px;
  top: var(--vp-nav-height);
  bottom: 0;
}

.aside-container::-webkit-scrollbar {
  display: none;
}

@media (min-width: 1280px) {
  .container {
    display: flex;
  }
}

.content {
  position: relative;
  margin: 0 auto;
  max-width: 688px;
}

@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 620px;
  }
}

.edit-link {
  margin: 0 0 32px;
}

.edit-link .vt-link {
  font-size: 14px;
  color: var(--vt-c-brand);
  font-weight: 500;
}

.vt-icon {
  width: 18px;
  height: 18px;
  color: var(--vt-c-brand);
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: -1px;
}
</style>
