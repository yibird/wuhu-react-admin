import React from 'react';
import { ContextMenuItem } from './types';
import { Icon } from '@/components';

export default function SubItem({
  icon,
  title,
  suffix = <Icon name="drag-move-line" />,
}: ContextMenuItem) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="context-menu-item">
        {/* {icon && <div className="context-menu-item_icon">{icon}</div>} */}
        <div>{title}</div>
        <div className="context-menu-item_suffix">
          <Icon name="drag-move-line" />
        </div>
      </div>
      <div
        style={{
          border: '1px solid red',
          position: 'absolute',
          right: '-100%',
          top: 0,
          width: 100,
          height: 100,
        }}
      ></div>
    </div>
  );
}
