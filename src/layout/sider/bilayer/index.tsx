import React from 'react';
import Logo from './Logo';
import SiderMenu from './SiderMenu';
import { Layout } from 'antd';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function BilayerSider() {
  const collapsed = useAppStore((state) => state.sider.collapsed, shallow);
  return (
    <Layout.Sider
      width={300}
      collapsedWidth={80}
      collapsed={collapsed}
      className="h-full box-border b-r-ef"
    >
      <Logo collapsedWidth={80} />
      <SiderMenu />
    </Layout.Sider>
  );
}
