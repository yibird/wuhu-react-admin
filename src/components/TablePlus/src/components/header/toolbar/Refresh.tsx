import React from 'react';
import { Icon } from '@/components';
import { Tooltip } from 'antd';
import { useSharedState } from '../../../context';

export default function Refresh() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('refresh')) return;

  return (
    <Tooltip title="刷新" placement="bottom">
      <div className="w-32 h-32 flex-center rounded-full border border-solid border-[#ccc]">
        <Icon size={18} name="refresh-line" />
      </div>
    </Tooltip>
  );
}
