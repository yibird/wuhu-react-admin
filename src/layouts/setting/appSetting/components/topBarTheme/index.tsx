import React, { useState } from "react";
import { Divider } from "antd";
import ThemeBlock from "@/components/ThemeBlock";
import { useStoreSelector } from "@/store";

const themes = [
  "rgb(9, 96, 189)",
  "rgb(0, 132, 244)",
  "rgb(0, 150, 136)",
  "#fff",
];
function TopBarTheme() {
  const { headerSetting, setHeaderThemeColor } = useStoreSelector.useApp();
  return (
    <div>
      <Divider>顶栏主题</Divider>
      <ThemeBlock
        themes={themes}
        defaultTheme={headerSetting.themeColor}
        onChange={(themeColor) => setHeaderThemeColor(themeColor)}
      />
    </div>
  );
}

export default TopBarTheme;
