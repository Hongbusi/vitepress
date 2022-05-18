export namespace DefaultTheme {
  export interface Config {
    logo?: string

    /**
     * The nav items.
     */
    nav?: NavItem[]

    /**
     * The sidebar items.
     */
    sidebar?: Sidebar

    /**
     * GitHub repository following the format <user>/<project>.
     *
     * @example `"vuejs/vue-next"`
     */
    repo?: string

    /**
     * Customize the header label. Defaults to GitHub/Gitlab/Bitbucket
     * depending on the provided repo.
     *
     * @example `"Contribute!"`
     */
    repoLabel?: string

    /**
     * If your docs are in a different repository from your main project.
     *
     * @example `"vuejs/docs-next"`
     */
    docsRepo?: string

    /**
     * If your docs are not at the root of the repo.
     *
     * @example `"docs"`
     */
    docsDir?: string

    /**
     * If your docs are in a different branch. Defaults to `master`.
     *
     * @example `"next"`
     */
    docsBranch?: string

    /**
     * Enable links to edit pages at the bottom of the page.
     */
    editLinks?: boolean

    /**
     * Custom text for edit link. Defaults to "Edit this page".
     */
    editLinkText?: string

    /**
     * Show last updated time at the bottom of the page. Defaults to `false`.
     * If given a string, it will be displayed as a prefix (default value:
     * "Last Updated").
     */
    lastUpdated?: string | boolean

    prevLinks?: boolean
    nextLinks?: boolean

    /**
     * The social links to be displayed at the end of the nav bar. Perfect for
     * placing links to social services such as GitHub, Twitter, Facebook, etc.
     */
    socialLinks?: SocialLink[]

    locales?: Record<string, LocaleConfig & Omit<Config, 'locales'>>

    algolia?: AlgoliaSearchOptions

    carbonAds?: {
      carbon: string
      custom?: string
      placement: string
    }
  }

  // nav -----------------------------------------------------------------------

  export type NavItem = NavItemWithLink | NavItemWithChildren

  export type NavItemWithLink = {
    text: string
    link: string

    /**
     * `activeMatch` is expected to be a regex string. We can't use actual
     * RegExp object here because it isn't serializable
     */
    activeMatch?: string
  }

  export interface NavItemWithChildren {
    text?: string
    items: NavItemWithLink[]
  }

  // sidebar -------------------------------------------------------------------

  export type Sidebar = SidebarGroup[] | SidebarMulti

  export interface SidebarMulti {
    [path: string]: SidebarGroup[]
  }

  export interface SidebarGroup {
    text: string
    items: SidebarItem[]
  }

  export interface SidebarItem {
    text: string
    link: string
  }

  // social link ---------------------------------------------------------------

  export interface SocialLink {
    icon: SocialLinkIcon
    link: string
  }

  export type SocialLinkIcon =
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'slack'
    | 'twitter'
    | 'youtube'

  // algolia  ------------------------------------------------------------------

  // partially copied from @docsearch/react/dist/esm/DocSearch.d.ts
  export interface AlgoliaSearchOptions {
    appId?: string
    apiKey: string
    indexName: string
    placeholder?: string
    searchParameters?: any
    disableUserPersonalization?: boolean
    initialQuery?: string
  }

  // locales -------------------------------------------------------------------

  export interface LocaleConfig {
    /**
     * Text for the language dropdown.
     */
    selectText?: string

    /**
     * Label for this locale in the language dropdown.
     */
    label?: string
  }
}
