import React, { useEffect, useState } from "react";
import { ColorPicker } from "antd";
import { useAppStore } from "@/store";
import { useCSSVariables } from "@/hooks/web/useCSSVariables";
import type { Color } from "antd/es/color-picker/color";
import { isWhite } from "@/utils/color";

const presets = [
  {
    label: "推荐主题",
    colors: [
      "rgb(255,255,255)",
      "rgb(9, 96, 189)",
      "rgb(0, 132, 244)",
      "rgb(0, 150, 136)",
    ],
  },
];
function TopBarTheme() {
  const { headerSetting, setHeaderThemeColor } = useAppStore();
  const setVariables = useCSSVariables();

  const onChange = (value: Color) => {
    const color = value.toRgbString();
    setHeaderThemeColor(color);
    setVariables({
      "--header-text-color": isWhite(color) ? "#333" : "#fff",
      "--header-hover-bg-color": isWhite(color)
        ? "#f6f6f6"
        : "rgba(0, 0, 0, 0.1)",
      "--header-bottom-border-color": isWhite(color) ? "#f5f5f5" : color,
    });
  };

  return (
    <div className="flex-y-center justify-between">
      <span>顶栏主题</span>
      <ColorPicker
        trigger="hover"
        value={headerSetting.themeColor}
        presets={presets}
        onChange={onChange}
      />
    </div>
  );
}

export default TopBarTheme;
