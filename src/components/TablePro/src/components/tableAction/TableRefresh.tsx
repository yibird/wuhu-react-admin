import React from 'react';
import { Tooltip } from 'antd';
import Icon from '@/components/Icon';

function TableRefresh() {
  return (
    <Tooltip title="刷新">
      <span>
        <Icon size={20} name="refresh-line" />
      </span>
    </Tooltip>
  );
}

export default TableRefresh;
