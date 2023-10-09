import React, { CSSProperties, useMemo } from 'react';
import { Layout } from 'antd';
import HeaderNav from './components/nav';
import HeaderMenu from './components/menu';
// import Tabs from '@/layouts/default/tabs';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';
import './index.css';

function LayoutHeader() {
  const { show, themeColor } = useAppStore().headerSetting;
  if (!show) return;

  const getStyle = useMemo((): CSSProperties => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor) ? '#333' : '#fff',
    };
  }, [themeColor]);
  return (
    <Layout.Header style={getStyle} className={'layout-header shadow'}>
      <HeaderNav />
      <HeaderMenu />
    </Layout.Header>
  );
}

export default LayoutHeader;
