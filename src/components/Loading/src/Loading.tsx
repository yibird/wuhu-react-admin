import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { Spin } from 'antd';
import type { LoadingProps } from './types';
import { clsx } from 'clsx';
import './index.css';

export const Loading = forwardRef((props: LoadingProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    tip = '',
    size = 'large',
    full = false,
    loading = false,
    background,
    theme,
    style,
    className,
  } = props;
  if (!loading) return;
  const classes = clsx([
    'loading',
    {
      'loading-full': full,
    },
    className,
  ]);
  return (
    <div ref={ref} style={{ backgroundColor: background, ...style }} className={classes}>
      <Spin tip={tip} spinning={loading} size={size}>
        {tip && <div style={{ opacity: 0 }}>{tip}</div>}
      </Spin>
    </div>
  );
});
