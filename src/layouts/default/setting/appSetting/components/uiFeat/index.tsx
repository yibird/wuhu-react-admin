import React from 'react';
import { Space, Divider, Switch } from 'antd';
function UIFeat() {
  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面功能</Divider>
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
