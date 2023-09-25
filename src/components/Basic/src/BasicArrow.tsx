import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Icon } from '@/components/Icon';
import type { BasicArrowProps } from './types';
import './arrow.css';

export function BasicArrow({ type = 'down', expand = true, size = 20 }: BasicArrowProps) {
  const getCls = useMemo(() => {
    return clsx(['arrow', `arrow-${type}`], { [`arrow-${type}--active`]: expand });
  }, [type, expand]);
  return (
    <span className={`arrow ${getCls}`}>
      <Icon name="arrow-down-s-line" size={size} />
    </span>
  );
}
