import React from 'react';
import { Icon } from '@/components';
import type { TabControlProps } from '../types';

export function TabNext({ onClick, className = '', style }: TabControlProps) {
  return (
    <div onClick={onClick} className={`tab-control tab-control-next ${className}`} style={style}>
      <Icon size={24} name="arrow-right-s-line" />
    </div>
  );
}
