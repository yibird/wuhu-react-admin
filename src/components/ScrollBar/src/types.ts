import { CSSProperties } from "react";

export interface ScrollbarProps extends BaseProps {
  // 是否使用原生滚动条
  native?: boolean;
  // 可视容器样式
  wrapStyle?: CSSProperties;
  // 可视容器class
  wrapClass?: string;
  // 可视容器样式
  viewStyle?: CSSProperties;
  // 内部容器class
  viewClass?: string;
  noresize?: boolean;
  // 渲染元素
  tag?: string;
  // 滚动条块颜色
  thumbColor?: string;
  // 滚动条宽度
  thumbWidth?: number;
}

export interface BarProps {
  // 滚动条是否垂直显示
  vertical?: boolean;
  // 滚动条块的大小
  size?: string;
  // 滚动条块颜色
  color?: string;
  // 滚动条宽度
  width?: number;
  // 移动距离
  move?: number;
}
