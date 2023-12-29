import React from 'react';
import { ColorPicker } from 'antd';
import type { PresetsItem } from 'antd/es/color-picker/interface';
import type { Color } from 'antd/es/color-picker';

export interface ThemePickerProps {
  title?: string;
  theme: string;
  presets?: PresetsItem[];
  onChange?: (theme: Color, hex: string) => void;
}

function ThemePicker({ title, theme, presets = [], onChange }: ThemePickerProps) {
  return (
    <div className="flex-y-center justify-between">
      <span>{title}</span>
      <ColorPicker value={theme} presets={presets} onChange={onChange} />
    </div>
  );
}

export default ThemePicker;
