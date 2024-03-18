import React from 'react';
import { Space, Divider } from 'antd';
import Stripe from './Stripe';
import Size from './Size';
import Setting from './setting';
import Import from './Import';
import Export from './export';
import Refresh from './Refresh';
import Fullscreen from './Fullscreen';

export default function TableHeaderToolbar() {
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
