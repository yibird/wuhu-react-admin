import React from 'react';
import { Space, Divider, Switch, Select } from 'antd';
import ConfigItem from '../ConfigItem';
import { SiderModeEnum } from '@/enums';
import { useAppStore, useSelector } from '@/store';

const siderMenuModeOptions = [
  {
    label: '扁平模式',
    value: SiderModeEnum.FLAT,
  },
  {
    label: '双层菜单模式',
    value: SiderModeEnum.BILAYER,
  },
];

function UIFeat() {
  const { sider, setSiderMode } = useAppStore(useSelector(['sider', 'setSiderMode']));
  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面功能</Divider>
      <ConfigItem
        title="侧边栏模式"
        content={
          <Select
            style={{ width: 120 }}
            defaultValue={sider.mode}
            options={siderMenuModeOptions}
            onChange={(mode: SiderModeEnum) => setSiderMode(mode)}
          />
        }
      />
      <div className="flex-y-center justify-between">
        <span>分割菜单</span>
        <Switch />
      </div>
      <div className="flex-y-center justify-between">
        <span>固定展开菜单</span>
        <Switch />
      </div>
      <div className="flex-y-center justify-between">
        <span>切换页面关闭菜单</span>
        <Switch />
      </div>
    </Space>
  );
}

export default UIFeat;
