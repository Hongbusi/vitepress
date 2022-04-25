import './styles/vars.css'
import './styles/base.css'

import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export { DefaultTheme } from './config'

const theme: Theme = {
  Layout,
  NotFound
}

export default theme
