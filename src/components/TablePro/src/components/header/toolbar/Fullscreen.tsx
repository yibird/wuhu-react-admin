import React from 'react';
import { Icon } from '@/components/Icon';
import { Tooltip } from 'antd';
import { useSharedState } from '../../../context';

function Fullscreen() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('fullscreen')) return;

  return (
    <Tooltip title="全屏">
      <span>
        <Icon name="fullscreen-line" size={18} />
      </span>
    </Tooltip>
  );
}
export default Fullscreen;
