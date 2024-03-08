import React, { useRef, useEffect, useState } from 'react';
import { Col, Card, Avatar, Divider, List, Skeleton, Space, Tag, Typography } from 'antd';
import { Button } from '@/components';

interface ListItem {
  name: string;
  email: string;
  picture: string;
  yearResult: number;
  tags?: string[];
}
const data: ListItem[] = [
  {
    name: '张丽',
    email: '62123123123@qq.com',
    picture: 'https://randomuser.me/api/portraits/women/81.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '张丽',
    email: '62123123123@qq.com',
    picture: 'https://randomuser.me/api/portraits/women/81.jpg',
    yearResult: 102123,
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '张丽',
    email: '62123123123@qq.com',
    picture: 'https://randomuser.me/api/portraits/women/81.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
  },
  {
    name: '张丽',
    email: '62123123123@qq.com',
    picture: 'https://randomuser.me/api/portraits/women/81.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
  {
    name: '莫文进',
    email: '12345645612@qq.com',
    picture: 'https://randomuser.me/api/portraits/men/57.jpg',
    yearResult: 102123,
    tags: ['销售达人', '业绩出众', '销售一部扛把子'],
  },
];

function ItemTitle(item: ListItem) {
  return (
    <Space>
      <span>{item.name}</span>
      {item.tags?.map((tag, index) => {
        return (
          <Tag color="green" key={index}>
            {tag}
          </Tag>
        );
      })}
    </Space>
  );
}

function ItemDescription(item: ListItem) {
  return (
    <div>
      本月已完成:
      <Typography.Link className="font-bold">¥{item.yearResult}</Typography.Link>
      ,完成进度:<Typography.Link className="font-bold">80%</Typography.Link>
    </div>
  );
}

export default function HotList() {
  return (
    <Col span={8}>
      <Card
        title="热门榜单"
        styles={{
          body: {
            padding: '0 12px',
          },
        }}
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
                title={<ItemTitle {...item} />}
                description={<ItemDescription {...item} />}
              />
              <Button>查看数据</Button>
            </List.Item>
          )}
        />
      </Card>
    </Col>
  );
}
