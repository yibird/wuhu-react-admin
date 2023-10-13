import type { ButtonProps as AntdButtonProps } from 'antd';
export type ButtonExtraType = 'success' | 'error' | 'warning';
export type ButtonType = AntdButtonProps['type'] | ButtonExtraType;
export type { AntdButtonProps };

export interface ButtonProps extends Omit<AntdButtonProps & BaseProps, 'type'> {
  /**
   * @desc 按钮类型
   * @default default
   */
  type?: ButtonType;
  /**
   * @desc 是否开启气泡效果
   * @default true
   */
  bubbleEffect?: boolean;
}
