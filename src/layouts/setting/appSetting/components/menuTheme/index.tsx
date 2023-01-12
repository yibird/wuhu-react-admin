import React, { useState } from "react";
import { Divider } from "antd";
import ThemeBlock from "@/components/ThemeBlock";
import { useStore } from "@/store";

const themes = [
  "rgb(0,21,41)",
  "rgb(33,33,33)",
  "rgb(39,51,82)",
  "rgb(255,255,255)",
  "rgb(25,27,36)",
  "rgb(25,26,35)",
  "rgb(48,65,86)",
  "rgb(0,22,40)",
  "rgb(40,51,62)",
  "rgb(52,64,88)",
];

function MenuTheme() {
  const { menuSetting, setMenuThemeColor } = useStore((state) => state);
  return (
    <div>
      <Divider>菜单主题</Divider>
      <ThemeBlock
        themes={themes}
        defaultTheme={menuSetting.themeColor}
        onChange={(themeColor) => setMenuThemeColor(themeColor)}
      />
    </div>
  );
}

export default MenuTheme;
