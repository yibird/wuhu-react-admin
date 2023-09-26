import { Preset } from 'unocss';
const remRE = /(-?[\.\d]+)rem/g;
export interface TransformUnitOptions {
  unit?: 'px' | 'rem' | 'em' | 'rpx';
}
export function transformUnit(options: TransformUnitOptions = {}): Preset {
  const { unit = 'px' } = options;
  return {
    name: '@unocss/preset-transform-unit',
    enforce: 'pre',
    postprocess(util) {
      util.entries.forEach((i) => {
        const value = i[1];
        if (value && typeof value === 'string' && remRE.test(value)) {
          i[1] = value.replace(remRE, (_, p1) => `${p1 * 4}${unit}`);
        }
      });
    },
  };
}
