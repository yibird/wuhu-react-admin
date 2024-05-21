import { defineConfig, type Rule } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';
import { shortcuts, rules } from './uno.preset';

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(tsx)$/],
    },
  },
  presets: [presetUno({ dark: 'class' }), presetWind(), presetRemToPx({ baseFontSize: 4 })],
  shortcuts,
  rules,
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
