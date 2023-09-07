import React from 'react';
import { Card, Typography, Row, Col, Avatar, Space } from 'antd';
import type { TeamItem } from '../types';

const items: TeamItem[] = [
  {
    id: 1,
    name: 'Github团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 2,
    name: 'Antd官方团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 3,
    name: 'Wuhu团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 4,
    name: 'React团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 5,
    name: 'Vue官方团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 6,
    name: 'Solid团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
];

const Team: React.FC<{ data?: TeamItem[] }> = ({ data = items }) => {
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
};

export default Team;
