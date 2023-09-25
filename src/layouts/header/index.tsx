import React, { CSSProperties, useMemo } from "react";
import { Layout } from "antd";
import HeaderNav from "./components/nav";
import HeaderMenu from "./components/menu";
import Tabs from "@/layouts/tabs";
import { useAppStore } from "@/store";
import { isWhite } from "@/utils/color";

function LayoutHeader() {
  const { show, themeColor } = useAppStore().headerSetting;
  if (!show) return;

  const getStyle = useMemo((): CSSProperties => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor) ? "#333" : "#fff",
    };
  }, [themeColor]);

  return (
    <div>
      <Layout.Header
        style={getStyle}
        className={"!px-0 !h-50 !leading-50 shadow"}
      >
        <div className="flex-y-center justify-between !h-50 !leading-50 box-border border-solid-b-#f5f5f5">
          <HeaderNav />
          <HeaderMenu />
        </div>
      </Layout.Header>
      <Tabs />
    </div>
  );
}

export default LayoutHeader;
