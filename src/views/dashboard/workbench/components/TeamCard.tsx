import React from 'react';
import { Card, Typography, Row, Col, Avatar } from 'antd';
import { Button } from '@/components';
import type { Team } from '../types';

function TeamCard({ data = [] }: { data?: Team[] }) {
  return (
    <Card
      title="团队"
      styles={{
        header: {
          minHeight: 50,
        },
      }}
      extra={<Button type="primary">更多</Button>}
    >
      {data.map((item) => {
        return (
          <Card.Grid
            key={item.id}
            className="cursor-pointer"
            style={{ width: '25%', padding: '15px 10px' }}
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

export default TeamCard;
