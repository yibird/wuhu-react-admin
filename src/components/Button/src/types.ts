import type { ButtonProps as AntdButtonProps } from 'antd';
// error 类型点击时不显示特效
export type ButtonExtraType = 'success' | 'error' | 'warning';
export type ButtonType = AntdButtonProps['type'] | ButtonExtraType;
export type { AntdButtonProps };

export interface ButtonProps extends Omit<AntdButtonProps & BaseProps, 'type'> {
  /**
   * @desc 按钮类型
   * @default default
   */
  type?: ButtonType;
}
