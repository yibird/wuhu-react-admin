import React from 'react';
import { Tooltip, Popover } from 'antd';
import { Icon } from '@/components';
import Content from './Content';

export default function Export() {
  return (
    <Tooltip title="导出">
      <Popover
        content={<Content />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <span>
          <Icon name="download-2-line" size={20} />
        </span>
      </Popover>
    </Tooltip>
  );
}
