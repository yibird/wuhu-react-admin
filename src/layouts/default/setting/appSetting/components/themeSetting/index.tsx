import React from 'react';
import { Divider, Space } from 'antd';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import ThemePicker from './ThemePicker';
import type { ThemePickerProps } from './ThemePicker';

const presetsMap = {
  SYS_THEME: [
    {
      label: '推荐主题',
      colors: ['#1677ff', 'rgb(9, 96, 189)', 'rgb(0, 132, 244)', 'rgb(0, 150, 136)'],
    },
  ],
  TOPBAR_THEME: [
    {
      label: '推荐主题',
      colors: ['rgb(255,255,255)', 'rgb(9, 96, 189)', 'rgb(0, 132, 244)', 'rgb(0, 150, 136)'],
    },
  ],
  SIDE_THEME: [
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
  ],
};

function ThemeSetting() {
  const sysTheme = useAppStore((state) => state.app.theme, shallow);
  const headerTheme = useAppStore((state) => state.header.theme, shallow);
  const siderTheme = useAppStore((state) => state.sider.themeColor, shallow);

  const setTheme = useAppStore((state) => state.setTheme, shallow);

  const themes: ThemePickerProps[] = [
    {
      title: '系统主题',
      theme: sysTheme,
      presets: presetsMap.SYS_THEME,
      onChange(theme, hex) {
        setTheme(hex);
      },
    },
    {
      title: '头部主题',
      theme: headerTheme,
      presets: presetsMap.TOPBAR_THEME,
    },
    {
      title: '菜单主题',
      theme: siderTheme,
      presets: presetsMap.SIDE_THEME,
    },
  ];

  return (
    <div>
      <Divider>主题设置</Divider>
      <Space direction="vertical" className="w-full">
        {themes.map((item, index) => {
          return <ThemePicker {...item} key={index} />;
        })}
      </Space>
    </div>
  );
}

export default ThemeSetting;
