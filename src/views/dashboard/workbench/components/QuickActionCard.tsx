import React from 'react';
import { Card, Avatar } from 'antd';
import { Button } from '@/components';
import type { QuickActions } from '../types';

function QuickActionCard({ data = [] }: { data?: QuickActions[] }) {
  return (
    <Card
      title="快捷操作"
      styles={{
        header: {
          minHeight: 50,
        },
      }}
      extra={<Button type="primary">添加</Button>}
    >
      {data.map((item) => {
        return (
          <Card.Grid
            key={item.id}
            className="cursor-pointer"
            style={{ width: '20%', padding: '15px 10px' }}
          >
            <div className="flex-center flex-col">
              <Avatar src={item.icon} />
              <div className="w-full mt-5 text-center truncate">{item.name}</div>
            </div>
          </Card.Grid>
        );
      })}
    </Card>
  );
}
export default QuickActionCard;
