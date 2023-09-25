export type ArrowType = 'down' | 'up';

export interface BasicArrowProps {
  /**
   * 箭头类型
   * @default down
   */
  type?: ArrowType;
  /**
   * @desc 是否允许展开
   * @default false
   */
  expand?: boolean;
  /**
   * @desc 箭头大小
   * @default 20
   */
  size?: number | string;
}

export interface BasicTitleProps extends BaseProps {
  /**
   * @desc 标题帮助信息
   * @default ''
   */
  helpMessage?: string | string[];
  /**
   * @desc 是否使用普通粗细的字体
   * @default false
   */
  normal?: boolean;
  /**
   * @desc 是否显示标题左侧的块元素
   * @default false
   */
  block?: boolean;
}
