import React, { CSSProperties, useMemo } from "react";
import { Layout } from "antd";
import HeaderNav from "@/layouts/nav";
import Tabs from "@/layouts/tabs";

import { useStore } from "@/store";
import { isWhite } from "@/utils/color";

function LayoutHeader() {
  const { show, themeColor } = useStore((state) => state.headerSetting);
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
        <HeaderNav />
      </Layout.Header>
      <Tabs />
    </div>
  );
}

export default LayoutHeader;
