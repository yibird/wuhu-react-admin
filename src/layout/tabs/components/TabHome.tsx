import React from 'react';
import { Icon } from '@/components';
import type { TabControlProps } from '../types';

export function TabHome({ onClick, className = '', style }: TabControlProps) {
  return (
    <div
      onClick={onClick}
      className={`tab-item tab-control tab-control-home ${className}`}
      style={style}
    >
      <Icon size={18} name="home-2-line" />
    </div>
  );
}
