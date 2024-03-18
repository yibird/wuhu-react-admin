import React from 'react';
import { Icon } from '@/components';
import { Tooltip } from 'antd';

export default function Fullscreen() {
  return (
    <Tooltip title="全屏">
      <span>
        <Icon name="fullscreen-line" size={18} />
      </span>
    </Tooltip>
  );
}
