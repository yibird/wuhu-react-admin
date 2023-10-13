import React from 'react';
import { Card, Typography, Row, Col, Avatar } from 'antd';
import type { Team } from '../types';

function TeamCard({ data = [] }: { data?: Team[] }) {
  return (
    <Card
      title="团队"
      headStyle={{ minHeight: 50 }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      <Row gutter={[10, 12]}>
        {data.map((item) => {
          return (
            <Col span={12} key={item.id}>
              <Avatar src={item.icon} />
              <span className="pl-5">{item.name}</span>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

export default TeamCard;
