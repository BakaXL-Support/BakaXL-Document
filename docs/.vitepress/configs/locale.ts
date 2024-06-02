import { createTranslate } from "../i18n/utils";
import type { DefaultTheme, HeadConfig, LocaleConfig } from "vitepress";

export const getLocaleConfig = (lang: string) => {
  const t = createTranslate(lang);
  const siteLink = "https://next.help.bakaxl.com";
  const repoLink = "https://github.com/BakaXL-Support/BakaXL-Next-docs";
  const urlPrefix = lang && lang !== "cn" ? `/${lang}` : "";
  const title = t("BakaXL 文档中心");
  const description = t(
    "提供 BakaXL 启动器在使用时疑难解答服务，同时也提供了一些其他的技术文档"
  );

  const head: HeadConfig[] = [
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:image", content: `${siteLink}/og.png` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: siteLink }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:image", content: `${siteLink}/og.png` }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#914796" }],
  ];

  const nav: DefaultTheme.NavItem[] = [
    { text: `🏠${t("主页")}`, link: urlPrefix + "/" },
    { text: `🍟${t("食用指南")}`, link: urlPrefix + "/v3/" },
    { text: `❓${t("遇到问题?")}`, link: urlPrefix + "/v3/faq" },
    {
      text: `📚${t("v3 相关文档")}`,
      items: [
        {
          text: `🤔${t("游戏常见问题")}`,
          link: urlPrefix + "/v3/minecraft-faq",
        },
        {
          text: `😷${t("游戏版本隔离")}`,
          link: urlPrefix + "/v3/minecraft-version-seperation",
        },
        {
          text: `📦${t("制作游戏整合包")}`,
          link: urlPrefix + "/v3/modpack-tutorial",
        },
        {
          text: `❌${t("编写规则")}`,
          link: urlPrefix + "/v3/write-rule",
        },
      ],
    },
    {
      text: `🦽${t("v3（稳定版）")}`,
      items: [
        { text: `🦽${t("v3（稳定版）")}`, link: urlPrefix + "/v3/" },
        { text: `🛰${t("v4（预览版）")}`, link: urlPrefix + "/v4/" },
      ],
    },
  ];

  const themeConfig: DefaultTheme.Config = {
    logo: "/favicon.svg",
    nav,
    socialLinks: [
      {
        icon: "github",
        link: repoLink,
      },
    ],
    footer: {
      message: t("用💴发电"),
      copyright:
        'MIT License © 2024-PRESENT <a href="https://github.com/BakaXL-Support">Failure Cat 🐱</a>',
    },
    editLink: {
      pattern: `${repoLink}/edit/main/docs/:path`,
      text: t("在 GithuB 上编辑此页"),
    },
  };

  if (lang === "cn") {
    Object.assign(themeConfig, {
      outline: {
        label: "页面导航",
      },
      lastUpdatedText: "最后更新于",
      darkModeSwitchLabel: "外观",
      sidebarMenuLabel: "目录",
      returnToTopLabel: "返回顶部",
      langMenuLabel: "选择语言",
      docFooter: {
        prev: "上一页",
        next: "下一页",
      },
    } satisfies DefaultTheme.Config);
  }

  const localeConfig: LocaleConfig<DefaultTheme.Config>[string] = {
    label: t("中文"),
    lang: t("zh-CN"),
    title,
    description,
    head,
    themeConfig,
  };

  return localeConfig;
};
