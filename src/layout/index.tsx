import React from 'react';
import { Layout } from 'antd';
import LayoutSider from './sider';
import LayoutHeader from './header';
import LayoutTabs from './tabs';
import LayoutContent from './content';
import LayoutFooter from './footer';

function DefaultLayout() {
  return (
    <Layout style={{ height: '100%', overflow: 'hidden' }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutTabs />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
