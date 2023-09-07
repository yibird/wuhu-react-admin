import React, { useMemo } from 'react';
import { Button as AButton } from 'antd';
import type { ButtonProps } from './types';
import './index.css';

function Button(props: ButtonProps) {
  const { type, className, style, children } = props;

  const getClass = useMemo(() => `ant-btn-${type} ${className}`, [type, className]);
  return (
    // @ts-ignore
    <AButton {...props} className={getClass} style={style}>
      {children}
    </AButton>
  );
}
Button.displayName = 'Button';
export default Button;
