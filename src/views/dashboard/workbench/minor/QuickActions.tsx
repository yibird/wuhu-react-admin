import React from 'react';
import { Card, Typography, Avatar, Button } from 'antd';
import type { QuickItem } from '../types';

const items: QuickItem[] = [
  {
    id: 1,
    name: '首页',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 2,
    name: '仪表盘',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 3,
    name: '系统管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 4,
    name: '权限管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 5,
    name: '首页',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 6,
    name: '仪表盘',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 7,
    name: '系统管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 8,
    name: '权限管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
];

const QuickActions: React.FC<{ data?: QuickItem[] }> = ({ data = items }) => {
  return (
    <Card
      title="快捷操作"
      headStyle={{ minHeight: 50 }}
      extra={<Button type="primary">添加</Button>}
    >
      {data.map((item) => {
        return (
          <Card.Grid key={item.id} style={{ width: '25%', padding: '15px 10px' }}>
            <div className="flex-center flex-col">
              <Avatar src={item.icon} />
              <div className="mt-5 text-center">{item.name}</div>
            </div>
          </Card.Grid>
        );
      })}
    </Card>
  );
};
export default QuickActions;
