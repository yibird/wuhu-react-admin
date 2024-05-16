export interface ViewProps extends BaseProps {
  /**
   * @desc 显示方向,可选值为 "horizontal"(水平) 或 "vertical"(垂直)
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @desc 是否全屏
   * @default true
   */
  full?: boolean;
  /**
   * @desc 元素之间的间距
   * @default 10
   */
  gutter?: number | string;
}

export interface ViewSiderProps extends BaseProps {
  /**
   * @desc 侧边栏容器宽度
   * @default 200
   */
  width?: number;
  /**
   * @description 是否可收缩
   * @return true
   */
  shrinkable?: boolean;
}

export interface ViewContentProps extends BaseProps {
  /**
   * @desc 是否占满容器
   * @default true
   */
  full?: boolean;
}
