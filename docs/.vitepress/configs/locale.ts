import { createTranslate } from '../i18n/utils'
import type { DefaultTheme, HeadConfig, LocaleConfig } from 'vitepress'
import { docsSidebar } from '../../src/sidebar' // 引入侧边栏函数

export const getLocaleConfig = (lang: string) => {
  const t = createTranslate(lang)
  const siteLink = 'https://help.bakaxl.com'
  const repoLink = 'https://github.com/BakaXL-Support/BakaXL-Next-docs'
  const urlPrefix = lang && lang !== 'cn' ? `/${lang}` : ''
  const title = t('BakaXL 文档中心')
  const description = t(
    '提供 BakaXL 启动器在使用时疑难解答服务，同时也提供了一些其他的技术文档'
  )

  const head: HeadConfig[] = [
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: `${siteLink}/og.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: siteLink }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: `${siteLink}/og.png` }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#914796' }],
  ]

  const nav: DefaultTheme.NavItem[] = [
    { text: `${t('主页')}`, link: urlPrefix + '/' },
    { text: `${t('文档')}`, link: urlPrefix + '/v3/' },
  ]

  const themeConfig: DefaultTheme.Config = {
    logo: '/favicon.ico',
    nav,
    sidebar: docsSidebar(lang), // 配置多语言侧边栏
    socialLinks: [
      {
        icon: 'github',
        link: repoLink,
      },
    ],    
    footer: {
      message: t('用 💴 发电'),
      copyright:
        'MIT License © 2024-PRESENT <a href="https://github.com/BakaXL-Support">Failure Cats 🐱</a>',
    },
    editLink: {
      pattern: `${repoLink}/edit/main/docs/src/:path`,
      text: t('在 GitHub 上编辑此页'),
    },
  }

  if (lang === 'cn') {
    Object.assign(themeConfig, {
      outline: {
        label: '页面导航',
        level: [1, 3],
      },
      lastUpdatedText: '最后更新于',
      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '目录',
      returnToTopLabel: '返回顶部',
      langMenuLabel: '选择语言',
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
    } satisfies DefaultTheme.Config)
  }

  const localeConfig: LocaleConfig<DefaultTheme.Config>[string] = {
    label: t('中文'),
    lang: t('zh-CN'),
    title,
    description,
    head,
    themeConfig,
  }

  return localeConfig
}
