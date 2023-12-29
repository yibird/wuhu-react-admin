import React from 'react';
import { Space, Divider, Select } from 'antd';
import ConfigItem from '../ConfigItem';
import { TabThemeEnum } from '@/enums';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

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

function UIDisplay() {
  const theme = useAppStore((state) => state.tabs.theme, shallow);
  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面显示</Divider>
      <ConfigItem
        title="Tab主题"
        content={<Select style={{ width: 100 }} defaultValue={theme} options={tabsThemeOptions} />}
      />
    </Space>
  );
}

export default UIDisplay;
