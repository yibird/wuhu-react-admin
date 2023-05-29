import React from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import SiderMenu from "./components/SiderMenu";
import { useAppStore } from "@/store";
import { ScrollBar } from "@/components/ScrollBar";
import { eq } from "lodash-es";

function LayoutSider() {
  const { collapsed, collapsedWidth, themeColor } = useAppStore(
    (state) => state.menuSetting
  );

  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      style={{ backgroundColor: themeColor }}
    >
      <div className={"h-full flex flex-col"}>
        <Logo themeColor={themeColor} collapsed={collapsed} />
        <ScrollBar className="flex-1">
          <SiderMenu themeColor={themeColor} />
        </ScrollBar>
      </div>
    </Layout.Sider>
  );
}

export default LayoutSider;
