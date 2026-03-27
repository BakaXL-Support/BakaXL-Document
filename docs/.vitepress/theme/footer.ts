import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  i18n: {
    root: {
      group: [
        {
          title: '文档',
          icon: { icon: 'mdi:book-open-page-variant', color: '#3b82f6' },
          links: [
            { name: 'BakaXL v3', link: '/v3/', icon: { icon: 'mdi:file-document', color: '#6366f1' } },
            { name: 'BakaXL v4', link: '/v4/', icon: { icon: 'mdi:file-document', color: '#8b5cf6' } },
          ],
        },
        {
          title: '社区',
          icon: { icon: 'mdi:chat-outline', color: '#10b981' },
          links: [
            { name: 'GitHub', link: 'https://github.com/BakaXL-Support', icon: { icon: 'mdi:github', color: '#64748b' } },
            { name: 'QQ 群', link: 'https://qm.qq.com/q/Ks5mcyS1Gu', icon: { icon: 'mdi:qqchat', color: '#12b7f5' } },
          ],
        },
        {
          title: '更多',
          icon: { icon: 'mdi:dots-horizontal-circle-outline', color: '#f59e0b' },
          links: [
            { name: 'BakaXL 官网', link: 'https://www.bakaxl.com', icon: { icon: 'mdi:web', color: '#ec4899' } },
          ],
        },
      ],
      author: {
        name: 'BakaXL Support Team',
        link: 'https://github.com/BakaXL-Support',
        startYear: 2022,
        text: 'MIT License.',
      },
    },
    en: {
      group: [
        {
          title: 'Docs',
          icon: { icon: 'mdi:book-open-page-variant', color: '#3b82f6' },
          links: [
            { name: 'BakaXL v3', link: '/en/v3/', icon: { icon: 'mdi:file-document', color: '#6366f1' } },
            { name: 'BakaXL v4', link: '/en/v4/', icon: { icon: 'mdi:file-document', color: '#8b5cf6' } },
          ],
        },
        {
          title: 'Community',
          icon: { icon: 'mdi:chat-outline', color: '#10b981' },
          links: [
            { name: 'GitHub', link: 'https://github.com/BakaXL-Support', icon: { icon: 'mdi:github', color: '#64748b' } },
            { name: 'QQ Group', link: 'https://qm.qq.com/q/Ks5mcyS1Gu', icon: { icon: 'mdi:qqchat', color: '#12b7f5' } },
          ],
        },
        {
          title: 'More',
          icon: { icon: 'mdi:dots-horizontal-circle-outline', color: '#f59e0b' },
          links: [
            { name: 'BakaXL Official', link: 'https://www.bakaxl.com', icon: { icon: 'mdi:web', color: '#ec4899' } },
          ],
        },
      ],
      author: {
        name: 'BakaXL Support Team',
        link: 'https://github.com/BakaXL-Support',
        startYear: 2022,
        text: 'MIT License.',
      },
    },
  },
}