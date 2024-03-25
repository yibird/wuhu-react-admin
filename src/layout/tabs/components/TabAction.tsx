import React, { ReactSVG } from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@/components';

interface TabActionProps {
  items?: MenuProps['items'];
  onClick?: (action?: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function TabAction({ items, onClick, style, className }: TabActionProps) {
  return (
    <Dropdown
      menu={{ items, onClick: ({ key }) => onClick && onClick(key) }}
      placement="bottomRight"
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          width: 40,
          height: '100%',
          display: 'grid',
          placeContent: 'center',
          ...style,
        }}
        className={className}
      >
        <Icon size={24} name="arrow-down-s-line" />
      </div>
    </Dropdown>
  );
}

export default TabAction;
