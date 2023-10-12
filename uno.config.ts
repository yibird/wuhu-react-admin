import { defineConfig } from 'unocss';
import type { Rule } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

const shortcuts = {
  'flex-center': 'flex justify-center items-center',
  'flex-x-center': 'flex justify-center',
  'flex-y-center': 'flex items-center',
  'flex-between': 'flex justify-between',
  'flex-between-center': 'flex justify-between items-center',
  'flex-center-between': 'flex justify-center items-stretch',
};

const positionRules: Rule[] = [
  [
    'absolute-center',
    {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
    },
  ],
  [
    'absolute-x-center',
    {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  ],
  [
    'absolute-y-center',
    {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  ],
];

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  shortcuts,
  rules: [...positionRules],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
