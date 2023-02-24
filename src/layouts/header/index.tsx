import React, { CSSProperties, useMemo } from "react";
import { Layout } from "antd";
import HeaderLeft from "./components/headerLeft";
import HeaderRight from "./components/headerRight";

import Tabs from "@/layouts/tabs";
import { useStore } from "@/store";
import { isWhite } from "@/utils/color";

function LayoutHeader() {
  const { show, themeColor } = useStore((state) => state.headerSetting);
  if (!show) return null;

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
          <HeaderLeft />
          <HeaderRight />
        </div>
      </Layout.Header>
      <Tabs />
    </div>
  );
}

export default LayoutHeader;
