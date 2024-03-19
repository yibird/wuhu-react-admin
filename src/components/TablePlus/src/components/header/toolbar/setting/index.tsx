import React from 'react';
import { useSharedState } from '@/components/TablePlus/src/context';
import { Popover, Tooltip } from 'antd';
import { Icon } from '@/components';
import Content from './Content';

export default function Setting() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('setting')) return;

  return (
    <Tooltip title="列设置">
      <Popover
        content={<Content />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <span>
          <Icon size={20} name="settings-line" />
        </span>
      </Popover>
    </Tooltip>
  );
}
