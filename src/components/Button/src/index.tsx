import React from 'react';
import { Button as AButton } from 'antd';
import type { ButtonProps } from './types';
import clsx from 'clsx';
import './style';

export function Button({ type = 'default', className = '', children, ...restProps }: ButtonProps) {
  return (
    <AButton
      {...restProps}
      type={type === 'default' ? 'default' : 'primary'}
      className={clsx(`ant-btn-${type}`, className)}
    >
      {children}
    </AButton>
  );
}
Button.displayName = 'Button';
