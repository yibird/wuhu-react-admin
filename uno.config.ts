import { defineConfig, type Rule } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

function createSizeShortcut(count: number) {
  return Object.fromEntries(
    Array.from({ length: count }).map((_, i) => [`size-${i}`, `w-${i} h-${i}`]),
  );
}

const shortcuts = {
  full: 'w-full h-full',
  'flex-center': 'flex justify-center items-center',
  'flex-x-center': 'flex justify-center',
  'flex-y-center': 'flex items-center',
  'flex-between': 'flex justify-between',
  'flex-between-center': 'flex justify-between items-center',
  'flex-center-between': 'flex justify-center items-stretch',
  'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  'absolute-x-center': 'absolute left-1/2 transform -translate-x-1/2',
  'absolute-y-center': 'absolute top-1/2 transform -translate-y-1/2',
  ...createSizeShortcut(1000),
};

const textSizes = {
  xs: {
    'font-size': '14px',
    'line-height': '20px',
  },
  sm: {
    'font-size': '16px',
    'line-height': '24px',
  },
  base: {
    'font-size': '20px',
    'line-height': '28px',
  },
  lg: {
    'font-size': '24px',
    'line-height': '32px',
  },
  xl: {
    'font-size': '28px',
    'line-height': '36px',
  },
  '2xl': {
    'font-size': '36px',
    'line-height': '44px',
  },
  '3xl': {
    'font-size': '48px',
    'line-height': '56px',
  },
  '4xl': {
    'font-size': '60px',
    'line-height': '68px',
  },
  '5xl': {
    'font-size': '72px',
    'line-height': '80px',
  },
};

const textSizeRules: Rule[] = [[/^text-(\w+)$/, ([, s]) => textSizes[s] || {}]];

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(tsx)$/],
    },
  },
  presets: [presetUno(), presetWind(), presetRemToPx({ baseFontSize: 4 })],
  shortcuts,
  rules: [...textSizeRules],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
