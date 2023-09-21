import React, { CSSProperties, useMemo } from 'react';
import { Layout } from 'antd';
import HeaderNavbar from '@/layout/navbar';
import HeaderMenus from './components/menus';
import Tabs from '@/layout/tabs';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';
import { eq } from 'lodash-es';
import './index.css';

function LayoutHeader() {
  const { show, themeColor } = useAppStore((state) => state.headerSetting, eq);
  const getStyle = useMemo((): CSSProperties => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor) ? '#333' : '#fff',
    };
  }, [themeColor]);

  if (!show) return null;

  return (
    <div>
      <Layout.Header style={getStyle} className={'layout-header shadow'}>
        <HeaderNavbar />
        <HeaderMenus />
      </Layout.Header>
      <Tabs />
    </div>
  );
}

export default LayoutHeader;
