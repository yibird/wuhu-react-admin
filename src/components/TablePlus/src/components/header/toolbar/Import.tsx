import React from 'react';
import { Tooltip } from 'antd';
import { useSharedState } from '@/components/TablePlus/src/context';
import { Icon } from '@/components';

export default function Import() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('import')) return;
  return (
    <Tooltip title="导入">
      <span>
        <Icon name="upload-2-line" size={20} />
      </span>
    </Tooltip>
  );
}
