import React from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import SiderMenu from './SiderMenu';
import { useAppStore } from '@/store';
import { ScrollBar } from '@/components/ScrollBar';
import { shallow } from 'zustand/shallow';

function LayoutSider() {
  const { collapsed, collapsedWidth, themeColor } = useAppStore((state) => state.sider, shallow);

  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      style={{ backgroundColor: themeColor }}
    >
      <div className={'h-full flex flex-col'}>
        <Logo />
        <ScrollBar className="flex-1">
          <SiderMenu />
        </ScrollBar>
      </div>
    </Layout.Sider>
  );
}

export default LayoutSider;
