import React, { useMemo } from 'react';
import { Button } from '@/components/Button';
import { Space } from 'antd';
import { useSharedState } from '../../context';
import { isBool, isObject } from '@/utils/is';
import clsx from 'clsx';
import { ActionPosition } from '../../types';

const positions: Record<ActionPosition, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

function TableAction() {
  const [{ action, actionPosition }, setState] = useSharedState();
  if (isBool(action) && !action) return;
  if (isObject(action)) {
    return <div className="flex-1 text-right">{action}</div>;
  }
  const getClass = useMemo(() => {
    return clsx('flex-1 px-10', actionPosition ? positions[actionPosition] : '');
  }, [actionPosition]);

  return (
    <Space className={getClass}>
      <Button type="primary">添加</Button>
      <Button type="primary">删除</Button>
      <Button type="primary">修改</Button>
    </Space>
  );
}
export default TableAction;
