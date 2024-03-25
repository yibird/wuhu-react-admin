import React from 'react';
import { Tooltip, Popover } from 'antd';
import { Icon } from '@/components';
import Content from './Content';

export default function Export() {
  return (
    <Tooltip title="导出" placement="bottom">
      <Popover
        content={<Content />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <div className="w-32 h-32 flex-center rounded-full border border-solid border-[#ccc]">
          <Icon name="download-2-line" size={18} />
        </div>
      </Popover>
    </Tooltip>
  );
}
