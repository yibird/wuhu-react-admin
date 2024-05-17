import React from 'react';
import { useSharedState } from '../../../context';
import { Button, Icon } from '@/components';
import { Space } from 'antd';

export default function TableHeaderAction() {
  console.log('!TableHeaderAction');
  const [{ action, actionPosition }] = useSharedState();
  if (typeof action === 'boolean' && !action) return;
  if (typeof action === 'object' && !action) return action;
  return (
    <div className={`flex-1 text-${actionPosition} mx-10`}>
      <Space>
        <Button type="primary" icon={<Icon name="add-line" />} />
        <Button type="error" icon={<Icon name="delete-bin-line" />} />
        <Button type="warning" icon={<Icon name="edit-line" />} />
        <Button icon={<Icon name="search-line" />} />
        <Button type="primary" icon={<Icon name="filter-line" />} shape="circle" />
      </Space>
    </div>
  );
}
