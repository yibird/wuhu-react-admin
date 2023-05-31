import React from "react";
import { Divider, ColorPicker } from "antd";
import ThemeBlock from "@/components/ThemeBlock";
import { useAppStore } from "@/store";
import { debounce, throttle } from "lodash-es";
import { Color } from "antd/es/color-picker";

const themes = [
  "#1677ff",
  "rgb(9, 96, 189)",
  "rgb(0, 132, 244)",
  "rgb(0, 150, 136)",
  "#fff",
];

const presets = [
  {
    label: "推荐主题",
    colors: [
      "#1677ff",
      "rgb(9, 96, 189)",
      "rgb(0, 132, 244)",
      "rgb(0, 150, 136)",
      "#fff",
    ],
  },
];

function SysTheme() {
  console.log("asdasd");
  const { themeColor, setThemeColor } = useAppStore();
  const onChange = throttle(
    (color: Color) => setThemeColor(color.toRgbString()),
    30
  );
  return (
    <div>
      <Divider>系统主题</Divider>
      {/* <ThemeBlock
        themes={themes}
        defaultTheme={themeColor}
        onChange={(theme) => setThemeColor(theme)}
      /> */}
      <div className="flex-y-center justify-between">
        <span>动画类型</span>
        <ColorPicker
          trigger="hover"
          value={themeColor}
          presets={presets}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SysTheme;
