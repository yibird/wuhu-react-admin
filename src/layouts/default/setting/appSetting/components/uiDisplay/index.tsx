import React from 'react';
import { Space, Divider, Select } from 'antd';

const tabsThemeOptions = [
  {
    label: '默认',
    value: 'default',
  },
];

function UIDisplay() {
  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面显示</Divider>
      <div className="flex-y-center justify-between">
        <span>Tabs主题</span>
        <Select style={{ width: 100 }} options={tabsThemeOptions} />
      </div>
    </Space>
  );
}

export default UIDisplay;
