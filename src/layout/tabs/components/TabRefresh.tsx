import React from 'react';
import { Icon } from '@/components';
import type { TabControlProps } from '../types';

export function TabRefresh({ onClick, className = '', style }: TabControlProps) {
  return (
    <div onClick={onClick} className={`tab-control tab-control-refresh ${className}`} style={style}>
      <Icon size={18} name="refresh-line" />
    </div>
  );
}
