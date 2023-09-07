import React from 'react';
import { Card, Typography, List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function Dynamics() {
  const avatar = 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png';
  return (
    <Card
      title="动态"
      headStyle={{ minHeight: 50 }}
      bodyStyle={{ padding: '0 24px' }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={avatar} />}
                title={item.title}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          );
        }}
      />
    </Card>
  );
}

export default Dynamics;
