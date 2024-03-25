import React from 'react';
import { useSharedState } from '@/components/TablePlus/src/context';
import { Popover, Tooltip } from 'antd';
import { Icon } from '@/components';
import Content from './Content';

export default function Setting() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('setting')) return;

  return (
    <Tooltip title="列设置" placement="bottom">
      <Popover
        content={<Content />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <div className="w-32 h-32 flex-center rounded-full border border-solid border-[#ccc]">
          <Icon size={18} name="settings-line" />
        </div>
      </Popover>
    </Tooltip>
  );
}
