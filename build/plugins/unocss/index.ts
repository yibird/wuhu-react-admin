import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import { transformUnit } from './preset';
import { rules } from './rules';

export default function unocssPlugin() {
  return Unocss({
    presets: [transformUnit(), presetAttributify(), presetUno()],
    rules,
  });
}
