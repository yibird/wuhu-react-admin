import React from 'react';
import { Icon } from '@/components';

interface TabRefreshProps extends BaseProps {}

function TabRefresh({ style, className }: TabRefreshProps) {
  return (
    <div
      style={{
        position: 'absolute',
        right: 40,
        width: 40,
        height: '100%',
        display: 'grid',
        placeContent: 'center',
      }}
      className={className}
    >
      <Icon size={18} name="refresh-line" />
    </div>
  );
}

export default TabRefresh;
