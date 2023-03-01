import React from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import SiderMenu from "./components/SiderMenu";
import { useStoreSelector } from "@/store";

function LayoutSider() {
  const { collapsed, collapsedWidth, themeColor } =
    useStoreSelector.useApp().menuSetting;
  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      style={{ backgroundColor: themeColor }}
    >
      <Logo themeColor={themeColor} collapsed={collapsed} />
      <SiderMenu themeColor={themeColor} />
    </Layout.Sider>
  );
}

export default LayoutSider;
