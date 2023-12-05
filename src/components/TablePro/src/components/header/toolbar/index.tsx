import React from 'react';
import { Space, Divider } from 'antd';
import Stripe from './Stripe';
import Size from './Size';
import Setting from './Setting';
import Import from './Import';
import Export from './Export';
import Refresh from './Refresh';
import Fullscreen from './Fullscreen';
function TableToolbar() {
  return (
    <Space className="ml-auto" size={2} split={<Divider type="vertical" />}>
      <Stripe />
      <Size />
      <Setting />
      <Import />
      <Export />
      <Refresh />
      <Fullscreen />
    </Space>
  );
}

export default TableToolbar;
