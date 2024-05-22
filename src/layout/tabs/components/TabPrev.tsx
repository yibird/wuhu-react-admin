import React from 'react';
import { Icon } from '@/components';
import type { TabControlProps } from '../types';

export function TabPrev({ onClick, className = '', style }: TabControlProps) {
  return (
    <div onClick={onClick} className={`tab-control tab-control-prev ${className}`} style={style}>
      <Icon size={24} name="arrow-left-s-line" />
    </div>
  );
}
