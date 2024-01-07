import React, { useMemo } from 'react';
import { Layout } from 'antd';
import HeaderNav from './components/nav';
import HeaderMenu from './components/menu';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';
import './index.css';

function LayoutHeader() {
  const { show, fixed } = useAppStore((state) => state.header);
  if (!show) return;

  // const getStyle = useMemo(() => {
  //   return {
  //     backgroundColor: themeColor,
  //     color: isWhite(themeColor) ? '#333' : '#fff',
  //   };
  // }, [themeColor]);

  return (
    <Layout.Header className={'layout-header bg-white shadow'}>
      <HeaderNav />
      <HeaderMenu />
    </Layout.Header>
  );
}

export default LayoutHeader;
