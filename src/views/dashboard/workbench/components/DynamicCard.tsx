import React from 'react';
import { Card, List, Avatar } from 'antd';
import { Button, Icon } from '@/components';

const data = [
  {
    title: 'Ant Design Title 1',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 2',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 3',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    title: 'Ant Design Title 4',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
];

function getItemAction() {
  return [
    <div className="flex items-center cursor-pointer" key="1">
      <Icon name="thumb-up-line" />
      <span className="ml-6">123</span>
    </div>,
    <div className="flex items-center cursor-pointer" key="2">
      <Icon name="heart-line" />
      <span className="ml-6">33</span>
    </div>,
    <div className="flex items-center cursor-pointer" key="3">
      <Icon name="message-2-line" />
      <span className="ml-6">1</span>
    </div>,
  ];
}

function DynamicCard() {
  return (
    <Card
      title="动态"
      styles={{
        header: {
          minHeight: 50,
        },
        body: {
          padding: '0 24px',
        },
      }}
      extra={<Button type="primary">更多</Button>}
    >
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item actions={getItemAction()}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://p6-passport.byteacctimg.com/img/user-avatar/a0e6b9cce7e213a99220097a5b644a49~50x50.awebp`}
                />
              }
              title={item.title}
              description={<div className="text-black">item.description</div>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default DynamicCard;
