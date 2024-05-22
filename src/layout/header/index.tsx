import React, { useMemo } from 'react';
import { Layout } from 'antd';
import HeaderNav from './components/nav';
import HeaderMenu from './components/menu';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';

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
    <Layout.Header
      className={'flex justify-between items-center h-50 leading-50 p-0! box-border shadow'}
    >
      <HeaderNav />
      <HeaderMenu />
    </Layout.Header>
  );
}

export default LayoutHeader;
