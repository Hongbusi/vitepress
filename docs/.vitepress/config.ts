import { defineConfig } from '../../src/node'

export default defineConfig({
  lang: 'en-US',
  title: 'Vite',
  description: 'Next Generation Frontend Tooling',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'Plugins', link: '/plugins/' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/vitejs/vite' },
          { text: 'Twitter', link: 'https://twitter.com/vite_js' },
          { text: 'Discord Chat', link: 'https://chat.vitejs.dev' },
          {
            text: 'Awesome Vite',
            link: 'https://github.com/vitejs/awesome-vite'
          },
          { text: 'DEV Community', link: 'https://dev.to/t/vite' },
          {
            text: 'Rollup Plugins Compat',
            link: 'https://vite-rollup-plugins.patak.dev/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' }
    ]
  }
})
