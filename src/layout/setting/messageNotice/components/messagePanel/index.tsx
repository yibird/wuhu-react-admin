import React, { useState } from 'react';
import type { Message } from './types';
import List from './List';
import { Space } from 'antd';
import { Button } from '@/components';
const initialList: Message[] = [
  {
    name: 'zchengfeng',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    describe: '这是一段标题',
    time: '2023-01-01',
  },
  {
    name: 'zhangsan',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    describe: '今天是美好的一天',
    time: '2023-01-02',
  },
  {
    name: 'lisi',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    describe: '超越极限',
    time: '2023-01-02',
  },
];

function MessagePanel() {
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

export default MessagePanel;
