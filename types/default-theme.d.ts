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

    /**
     * Adds locale menu to the nav. This option should be used when you have
     * your translated sites outside of the project.  When you have your
     * translated docs within the project, you should use `locales`
     * option instead.
     */
    localeLinks?: LocaleLinks

    /**
     * The algolia options. Leave it undefined to disable the search feature.
     */
    algolia?: AlgoliaSearchOptions

    /**
     * The carbon ads options. Leave it undefined to disable the ads feature.
     */
    carbonAds?: CarbonAdsOptions
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

  export interface LocaleLinks {
    text: string
    items: LocaleLink[]
  }

  export interface LocaleLink {
    text: string
    link: string
  }

  // algolia ------------------------------------------------------------------

  /**
   * The Algolia search options. Partially copied from
   * `@docsearch/react/dist/esm/DocSearch.d.ts`
   */
  export interface AlgoliaSearchOptions {
    appId?: string
    apiKey: string
    indexName: string
    placeholder?: string
    searchParameters?: any
    disableUserPersonalization?: boolean
    initialQuery?: string
  }

  // carbon ads ----------------------------------------------------------------

  export interface CarbonAdsOptions {
    carbon: string
    custom?: string
    placement: string
  }
}
