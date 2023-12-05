import React from 'react';
import { Tooltip } from 'antd';
import { Icon } from '@/components';
import { useSharedState } from '../../../context';

function Refresh() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('refresh')) return;

  return (
    <Tooltip title="刷新">
      <span>
        <Icon size={20} name="refresh-line" />
      </span>
    </Tooltip>
  );
}

export default Refresh;
