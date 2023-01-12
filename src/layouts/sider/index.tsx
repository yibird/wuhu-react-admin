import React from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import SiderMenu from "../menu";

import { useStore } from "@/store";

function LayoutSider() {
  const { collapsed, collapsedWidth, themeColor } = useStore(
    (state) => state.menuSetting
  );
  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      style={{ backgroundColor: themeColor }}
    >
      <Logo themeColor={themeColor} />
      <SiderMenu themeColor={themeColor} />
    </Layout.Sider>
  );
}

export default LayoutSider;
