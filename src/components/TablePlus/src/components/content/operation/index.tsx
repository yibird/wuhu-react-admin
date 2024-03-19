import React from 'react';
import { Dropdown, MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span>详情</span>,
  },
  {
    key: '2',
    label: <span>删除</span>,
  },
  {
    key: '3',
    label: <span>审核</span>,
  },
];

export default function Operation() {
  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <a>操作</a>
    </Dropdown>
  );
}
