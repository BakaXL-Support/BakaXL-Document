<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";
import HomePage from "../components/HomePage.vue";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import { Footer } from "@theojs/lumen";
import { Footer_Data } from "./footer";

const { isDark } = useData();

const isChromium =
	navigator.userAgent.includes("Chrome") ||
	navigator.userAgent.includes("Chromium");

const enableTransitions = () =>
	isChromium &&
	"startViewTransition" in document &&
	window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
	if (!enableTransitions()) {
		isDark.value = !isDark.value;
		return;
	}

	const clipPath = [
		`circle(0px at ${x}px ${y}px)`,
		`circle(${Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y),
		)}px at ${x}px ${y}px)`,
	];

	await document.startViewTransition(async () => {
		isDark.value = !isDark.value;
		await nextTick();
	}).ready;

	document.documentElement.animate(
		{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
		{
			duration: 350,
			easing: "ease-in-out",
			fill: "forwards",
			pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
		},
	);
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <HomePage />
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
    <template #layout-top>
      <NolebaseHighlightTargetedHeading />
    </template>
    <template #layout-bottom>
      <Footer :Footer_Data="Footer_Data" />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>