import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@/components';

interface TabActionProps {
  items?: MenuProps['items'];
  onClick?: (action?: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function TabAction({ items, onClick, className = '', style }: TabActionProps) {
  return (
    <Dropdown
      menu={{ items, onClick: ({ key }) => onClick && onClick(key) }}
      placement="bottomRight"
    >
      <div className={`tab-control tab-control-action ${className}`} style={style}>
        <Icon size={24} name="arrow-down-s-line" />
      </div>
    </Dropdown>
  );
}
