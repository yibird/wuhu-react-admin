import React from 'react';
import { useSharedState } from '../../../context';
import { Button } from '@/components';
import { Space } from 'antd';

export default function TableHeaderAction() {
  const [{ action, actionPosition }] = useSharedState();
  if (typeof action === 'boolean' && !action) return;
  if (typeof action === 'object' && !action) return action;
  return (
    <div className={`flex-1 text-${actionPosition} mx-10`}>
      <Space>
        <Button type="primary">添加</Button>
        <Button type="error">删除</Button>
        <Button type="warning">修改</Button>
        <Button>查询</Button>
      </Space>
    </div>
  );
}
