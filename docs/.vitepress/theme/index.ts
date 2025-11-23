// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Underline } from '@theojs/lumen'
import '@theojs/lumen/style'
import './style.css'
import 'uno.css'
import "./blur.css";

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import StatusBadge from '../components/StatusBadge.vue'
import WarnTip from '../components/WarnTip.vue'
import BakaFourIndexButtonList from '../components/BakaFourIndexButtonList.vue'
import Layout from './Layout.vue'

import type { Options as EnhanceOptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
  InjectionKey as EnhanceInjectionKey,
  LayoutMode,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app, router, siteData }:EnhanceAppContext) {
    //app.use(NolebaseGitChangelogPlugin); // disable ChangeLog Plugin
    app.component('StatusBadge', StatusBadge)
    app.component('WarnTip', WarnTip)
    app.component('BakaFourIndexButtonList', BakaFourIndexButtonList)
    app.component('ContributorCards',)
    app.component('Home', Underline)
    app.provide(EnhanceInjectionKey, {
      layoutSwitch: {
        defaultMode: LayoutMode.BothWidthAdjustable,
      },
      spotlight: {
        defaultToggle: true,
      },
    } as EnhanceOptions)
  },
} satisfies Theme
