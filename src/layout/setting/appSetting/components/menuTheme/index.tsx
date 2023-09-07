import React from 'react';
import { ColorPicker } from 'antd';
import { useAppStore } from '@/store';
import { eq } from 'lodash-es';

const presets = [
  {
    label: '',
    colors: [
      'rgb(0,21,41)',
      'rgb(33,33,33)',
      'rgb(39,51,82)',
      'rgb(255,255,255)',
      'rgb(25,27,36)',
      'rgb(25,26,35)',
      'rgb(48,65,86)',
      'rgb(0,22,40)',
      'rgb(40,51,62)',
      'rgb(52,64,88)',
    ],
  },
];

function MenuTheme() {
  const menuSetting = useAppStore((state) => state.menuSetting, eq);
  const setMenuThemeColor = useAppStore((state) => state.setMenuThemeColor, eq);

  return (
    <div className="flex-y-center justify-between">
      <span>菜单主题</span>
      <ColorPicker
        value={menuSetting.themeColor}
        presets={presets}
        onChange={(color) => setMenuThemeColor(color.toRgbString())}
      />
    </div>
  );
}

export default MenuTheme;
