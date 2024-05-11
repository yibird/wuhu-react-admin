import React, { useState } from 'react';
import List from './List';
import { Space } from 'antd';
import { Button } from '@/components';
import type { Message } from './types';

const initialList: Message[] = [
  { type: 0, title: '这是一段标题', describe: '2023-01-01' },
  { type: 1, title: '今天是美好的一天', describe: '2023-01-02' },
  { type: 2, title: '超越极限', describe: '2023-01-02' },
];

function NoticePanel() {
  const [list, setList] = useState<Message[]>(() => initialList);

  const onDel = (index: number) => {
    setList(list.filter((_, n) => n !== index));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex-1 overflow-y-auto">
        <List list={list} onDel={onDel} />
      </div>
      <Space className="px-12 py-15 justify-end b-t-eee">
        <Button>确认所有消息</Button>
        <Button type="primary">知道了</Button>
      </Space>
    </div>
  );
}

export default NoticePanel;
