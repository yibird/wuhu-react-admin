import React from 'react';
import { Icon } from '@/components';
import { Tooltip } from 'antd';
import { useSharedState } from '../../../context';

export default function Refresh() {
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
