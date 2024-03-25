import React from 'react';
import { Tooltip } from 'antd';
import { useSharedState } from '@/components/TablePlus/src/context';
import { Icon } from '@/components';

export default function Import() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('import')) return;
  return (
    <Tooltip title="导入" placement="bottom">
      <div className="w-32 h-32 flex-center rounded-full border border-solid border-[#ccc]">
        <Icon name="upload-2-line" size={18} />
      </div>
    </Tooltip>
  );
}
