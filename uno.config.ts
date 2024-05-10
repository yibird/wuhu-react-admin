import { defineConfig, type Rule } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

function createSizeShortcut(count: number) {
  return Array.from({ length: count + 1 }).reduce((acc: object, _, i) => {
    acc[`size-${i}`] = `w-${i} h-${i}`;
    return acc;
  }, {});
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
  'fixed-center': 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  'fixed-x-center': 'fixed left-1/2 transform -translate-x-1/2',
  'fixed-y-center': 'fixed top-1/2 transform -translate-y-1/2',
  ...createSizeShortcut(1000),
};

const textSizes = {
  xs: {
    'font-size': '12px',
    'line-height': '16px',
  },
  sm: {
    'font-size': '14px',
    'line-height': '18px',
  },
  base: {
    'font-size': '16px',
    'line-height': '20px',
  },
  md: {
    'font-size': '18px',
    'line-height': '30px',
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

const shadowArr = [
  {
    value: 2,
    blur: 4,
    spread: -2,
    color: 'rgba(0, 0, 0, 0.16)',
  },
  {
    value: 3,
    blur: 6,
    spread: 0,
    color: 'rgba(0, 0, 0, 0.12)',
  },
  {
    value: 5,
    blur: 12,
    spread: 4,
    color: 'rgba(0, 0, 0, 0.09)',
  },
];

function createShadows(pisitions = ['up', 'down', 'left', 'right'], showdows = shadowArr) {
  return showdows.reduce((acc, item, i) => {
    return pisitions.reduce((childAcc, position) => {
      const x = ['up', 'down'].includes(position)
        ? 0
        : position === 'right'
          ? item.value
          : -item.value;
      const y = ['left', 'right'].includes(position)
        ? 0
        : position === 'down'
          ? item.value
          : -item.value;
      acc[`${position}${i === 0 ? '' : '-' + i}`] = {
        'box-shadow': `${x}px ${y}px ${item.blur}px ${item.spread}px ${item.color}`,
      };
      return acc;
    }, {});
  }, {});
}

const shadows = createShadows();

const rules: Rule[] = [
  [/^text-(\w+)$/, ([, s]) => textSizes[s]],
  [/^shadow-(\w+(?:-\w+)*)$/, ([_, s]) => shadows[s]],
];

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(tsx)$/],
    },
  },
  presets: [presetUno(), presetWind(), presetRemToPx({ baseFontSize: 4 })],
  shortcuts,
  rules: [...rules],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
