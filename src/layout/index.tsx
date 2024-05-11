import React from 'react';
import { Layout } from 'antd';
import LayoutSider from './sider';
import LayoutHeader from './header';
import LayoutTabs from './tabs';
import LayoutContent from './content';
import LayoutFooter from './footer';
import IM from './im';

function DefaultLayout() {
  return (
    <Layout className="full overflow-hidden">
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutTabs />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
      <IM />
    </Layout>
  );
}

export default DefaultLayout;
