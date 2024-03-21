import React from 'react';
import SiderMenu from './SiderMenu';
import { Layout } from 'antd';
import { useAppStore } from '@/store';
import Logo from './Logo';

export default function BilayerSider() {
  const collapsed = useAppStore((state) => state.sider.collapsed);
  return (
    <Layout.Sider
      width={260}
      collapsedWidth={80}
      collapsed={collapsed}
      className="box-border"
      style={{
        borderRight: '1px solid #efefef',
      }}
    >
      <Logo collapsedWidth={80} />
      <SiderMenu />
    </Layout.Sider>
  );
}
