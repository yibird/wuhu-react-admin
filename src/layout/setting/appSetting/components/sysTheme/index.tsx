import React from "react";
import { Divider } from "antd";
import ThemeBlock from "@/components/ThemeBlock";
import { useAppStore } from "@/store";

const themes = [
  "#1677ff",
  "rgb(9, 96, 189)",
  "rgb(0, 132, 244)",
  "rgb(0, 150, 136)",
  "#fff",
];

function SysTheme() {
  const { themeColor, setThemeColor } = useAppStore();
  return (
    <div>
      <Divider>系统主题</Divider>
      <ThemeBlock
        themes={themes}
        defaultTheme={themeColor}
        onChange={(theme) => setThemeColor(theme)}
      />
    </div>
  );
}

export default SysTheme;
