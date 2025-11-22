import { defineConfig } from 'vitepress'
import { getLocaleConfig } from './configs'
import Unocss from 'unocss/vite'
import { docsSidebar } from '../src/sidebar'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import footnotePlugin from 'markdown-it-footnote'

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  srcDir: 'src',
  assetsDir: 'assets',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
  ],
  lastUpdated: true,
  rewrites: {},
  locales: {
    root: getLocaleConfig('cn'),
    en: getLocaleConfig('en'),
  },

  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    config: (md) => {
      md.use(footnotePlugin)
      md.use(groupIconMdPlugin)
    },
  },

  themeConfig: {
    sidebar: docsSidebar(),
    outline: { level: [1, 3] },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client'],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
    plugins: [
      // disable ChangeLog Plugin
      // GitChangelog({
      //   repoURL: () => "https://github.com/BakaXL-Support/BakaXL-Next-docs",
      // }),
      // GitChangelogMarkdownSection(),
      Unocss(),
      groupIconVitePlugin(),
    ],
  },
})
