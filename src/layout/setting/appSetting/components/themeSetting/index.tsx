import React from 'react';
import { Divider, Select, Space } from 'antd';
import { useAppStore, useSelector } from '@/store';
import ThemePicker from './ThemePicker';
import ConfigItem from '../ConfigItem';
import { TabThemeEnum } from '@/enums';
import type { ThemePickerProps } from './ThemePicker';

const presetsMap = {
  SYS_THEME: [
    {
      label: '推荐主题',
      colors: [
        'rgb(22, 119, 255)',
        'rgb(9, 96, 189)',
        'rgb(0, 132, 244)',
        'rgb(0, 150, 136)',
        'rgb(138, 43, 226)',
      ],
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

const tabsThemeOptions = [
  {
    label: '块',
    value: TabThemeEnum.BLOCK,
  },
  {
    label: '卡片',
    value: TabThemeEnum.CARD,
  },
];

function ThemeSetting() {
  const { app, header, sider, tabs, setApp, setHeader, setSider, setTabs } = useAppStore(
    useSelector(['app', 'header', 'sider', 'tabs', 'setApp', 'setHeader', 'setSider', 'setTabs']),
  );
  const themes: ThemePickerProps[] = [
    {
      title: '系统主题',
      theme: app.themeColor,
      presets: presetsMap.SYS_THEME,
      onChange(_, themeColor) {
        setApp({ ...app, themeColor });
      },
    },
    {
      title: '头部主题',
      theme: header.themeColor,
      presets: presetsMap.TOPBAR_THEME,
      onChange(_, themeColor) {
        setHeader({ ...header, themeColor });
      },
    },
    {
      title: '菜单主题',
      theme: sider.themeColor,
      presets: presetsMap.SIDE_THEME,
      onChange(_, themeColor) {
        setSider({ ...sider, themeColor });
      },
    },
  ];

  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>主题设置</Divider>
      <Space direction="vertical" className="w-full">
        {themes.map((item, index) => {
          return <ThemePicker {...item} key={index} />;
        })}
      </Space>
      <ConfigItem
        title="Tab主题"
        content={
          <Select
            style={{ width: 120 }}
            defaultValue={tabs.theme}
            options={tabsThemeOptions}
            onChange={(theme) => setTabs({ ...tabs, theme })}
          />
        }
      />
    </Space>
  );
}

export default ThemeSetting;
