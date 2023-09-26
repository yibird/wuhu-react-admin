import React from 'react';
import { CollapseHader } from './CollapseHeader';
import type { CollapseContainerProps } from '../types';

export function CollapseContainer({
  loading,
  canExpan,
  triggerWindowResize,
  lazyTime,
}: CollapseContainerProps) {
  return (
    <div>
      <CollapseHader />
    </div>
  );
}
