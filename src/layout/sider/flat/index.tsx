import React from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import SiderMenu from './SiderMenu';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function FlatSider() {
  console.log('FlatSiderFlatSiderFlatSider');

  const { collapsed, collapsedWidth, themeColor, fixed } = useAppStore(
    (state) => state.sider,
    shallow,
  );

  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      theme={'dark'}
      style={{ backgroundColor: themeColor }}
      className={`h-full inset-0 ${fixed ? 'fixed' : 'relative'}`}
    >
      <div className={'h-full flex flex-col'}>
        <Logo />
        <SiderMenu />
      </div>
    </Layout.Sider>
  );
}
