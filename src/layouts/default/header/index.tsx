import React, { useMemo } from 'react';
import { Layout } from 'antd';
import HeaderNav from './components/nav';
import HeaderMenu from './components/menu';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';
import './index.css';

function LayoutHeader() {
  const { show, themeColor, fixed } = useAppStore((state) => state.headerSetting);
  if (!show) return;

  const getStyle = useMemo(() => {
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
