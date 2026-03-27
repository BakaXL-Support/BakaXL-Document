import {
  defineConfig,
  presetAttributify,
  presetWind4,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  transformers: [transformerDirectives()],
});
