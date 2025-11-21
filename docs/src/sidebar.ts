import { DefaultTheme } from "vitepress";
import { createTranslate } from "../.vitepress/i18n/utils";

export function docsSidebar(lang: string = 'cn'): DefaultTheme.SidebarItem[] {
  const t = createTranslate(lang);
  // 仅非默认语言添加语言后缀，默认语言（cn）直接使用根路径
  const langPrefix = lang !== 'cn' ? `${lang}/` : '';
  return [
    {
      text: t('开始使用'),
      items: [
        { text: t('v3版本'), link: `/${langPrefix}v3/index.md` },
        { text: t('v4版本(开发中)'), link: `/${langPrefix}v4/index.md` },
        { text: t('常见问题'), link: `/${langPrefix}v3/faq.md` },
      ]
    },
    {
      text: t('v3版本文档'),
      items: [
        { text: t('游戏常见问题'), link: `/${langPrefix}v3/minecraft-faq.md` },
        { text: t('游戏版本隔离'), link: `/${langPrefix}v3/minecraft-version-seperation.md` },
        { text: t('制作整合包'), link: `/${langPrefix}v3/modpack-tutorial.md` },
        { text: t('编写规则(已封存)'), link: `/${langPrefix}v3/write-rule.md` },
      ]
    },
    {
      text: t('v4版本文档'),
      items: [
        { text: t('在Ubuntu系统上运行BakaXL'), link: `/${langPrefix}v4/running-in-ubuntu` },
        { text: t('运行指南(施工中)'), link: `/${langPrefix}v4/runguide.md` },
      ]
    }
  ]
}