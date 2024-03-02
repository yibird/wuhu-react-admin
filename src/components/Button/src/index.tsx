import React, { useMemo } from 'react';
import { Button as AButton } from 'antd';
import type { ButtonProps, AntdButtonProps } from './types';
import clsx from 'clsx';
import './index.css';

export function Button({ type, className = '', children, ...restProps }: ButtonProps) {
  const getClass = useMemo(() => clsx(`ant-btn-${type}`, className), [type, className]);
  return (
    <AButton {...restProps} className={getClass}>
      {children}
    </AButton>
  );
}
Button.displayName = 'Button';
