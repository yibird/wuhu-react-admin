import React from "react";
import { Layout } from "antd";
import LayoutSider from "./sider";
import LayoutHeader from "./header";
import LayoutContent from "./content";
import LayoutFooter from "./footer";

function AppLayout() {
  return (
    <Layout style={{ height: "100%", overflow: "hidden" }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;
