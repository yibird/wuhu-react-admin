import React from 'react';
import Menu from './Menu';
import SubMenu from './SubMenu';
import { Layout } from 'antd';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function BilayerSider() {
  const { collapsed } = useAppStore((state) => state.sider, shallow);

  return (
    <Layout.Sider width={300} collapsedWidth={80} collapsed={collapsed}>
      <div className="full flex">
        <Menu />
        <SubMenu collapsed={collapsed} />
      </div>
    </Layout.Sider>
  );
}
