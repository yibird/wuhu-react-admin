import React, { CSSProperties, useMemo } from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import SiderMenu from './SiderMenu';
import { useAppStore } from '@/store';
import { ScrollBar } from '@/components/ScrollBar';
import { shallow } from 'zustand/shallow';

function LayoutSider() {
  const { collapsed, collapsedWidth, themeColor, fixed } = useAppStore(
    (state) => state.sider,
    shallow,
  );

  const getStyle: CSSProperties = useMemo(() => {
    const style = {
      backgroundColor: themeColor,
    };
    if (fixed) {
      return {
        ...style,
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      };
    }

    return style;
  }, [themeColor, fixed]);

  return (
    <Layout.Sider collapsed={collapsed} collapsedWidth={collapsedWidth} style={getStyle}>
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
