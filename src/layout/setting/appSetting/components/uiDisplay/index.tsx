import React from 'react';
import { Space, Divider, Select } from 'antd';
import ConfigItem from '../ConfigItem';
import { TabThemeEnum, SiderModeEnum } from '@/enums';
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

const menuModeOptions = [
  {
    label: '扁平模式',
    value: SiderModeEnum.FLAT,
  },
  {
    label: '双层菜单模式',
    value: SiderModeEnum.BILAYER,
  },
];
function UIDisplay() {
  const tabTheme = useAppStore((state) => state.tabs.theme, shallow);
  const siderMode = useAppStore((state) => state.sider.mode, shallow);
  const { setSiderMode } = useAppStore((state) => state, shallow);

  const changeSiderMode = (mode: SiderModeEnum) => setSiderMode(mode);

  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面显示</Divider>
      <ConfigItem
        title="侧边栏模式"
        content={
          <Select
            style={{ width: 120 }}
            defaultValue={siderMode}
            options={menuModeOptions}
            onChange={changeSiderMode}
          />
        }
      />
      <ConfigItem
        title="Tab主题"
        content={
          <Select style={{ width: 120 }} defaultValue={tabTheme} options={tabsThemeOptions} />
        }
      />
    </Space>
  );
}

export default UIDisplay;
