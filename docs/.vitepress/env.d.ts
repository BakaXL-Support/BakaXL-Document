/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// CSS modules
declare module '*.css' {
  const content: string
  export default content
}

declare module 'uno.css' {
  const content: string
  export default content
}

// @theojs/lumen
declare module '@theojs/lumen/style' {
  const content: string
  export default content
}

// @nolebase plugins
declare module '@nolebase/vitepress-plugin-git-changelog/client/style.css' {
  const content: string
  export default content
}

declare module '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css' {
  const content: string
  export default content
}

declare module '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css' {
  const content: string
  export default content
}

// markdown-it-footnote
declare module 'markdown-it-footnote' {
  import type { PluginSimple } from 'markdown-it'
  const footnotePlugin: PluginSimple
  export default footnotePlugin
}