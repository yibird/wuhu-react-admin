import React, { useMemo } from 'react';
import { Button as AButton } from 'antd';
import type { ButtonProps, AntdButtonProps } from './types';
import { HappyProvider } from '@ant-design/happy-work-theme';
import './index.css';

export function Button(props: ButtonProps) {
  const { type, bubbleEffect = true, className, style, children } = props;
  const antdBtnProps = props as AntdButtonProps;
  const getClass = useMemo(() => `ant-btn-${type} ${className}`, [type, className]);

  const ButtonComp = (
    <AButton {...antdBtnProps} className={getClass} style={style}>
      {children}
    </AButton>
  );
  return bubbleEffect ? <HappyProvider>{ButtonComp}</HappyProvider> : ButtonComp;
}
Button.displayName = 'Button';
