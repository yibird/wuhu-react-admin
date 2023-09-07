import type { ButtonProps as AButtonProps } from 'antd';
export type ButtonExtraType = 'success' | 'error' | 'warning';
export type ButtonType = AButtonProps['type'] | ButtonExtraType;

export interface ButtonProps extends Omit<AButtonProps & BaseProps, 'type'> {
  type?: ButtonType;
}
