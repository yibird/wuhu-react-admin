import React from 'react';
import { Icon } from '@/components';

interface TabRefreshProps extends BaseProps {
  onClick?: () => void;
}

function TabRefresh({ style = {}, className = '', onClick }: TabRefreshProps) {
  return (
    <div
      style={{
        position: 'absolute',
        right: 40,
        width: 40,
        height: '100%',
        display: 'grid',
        placeContent: 'center',
        ...style,
      }}
      className={className}
      onClick={onClick}
    >
      <Icon size={18} name="refresh-line" />
    </div>
  );
}

export default TabRefresh;
