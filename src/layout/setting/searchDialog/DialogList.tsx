import React, { useEffect, useState } from 'react';
import { Icon } from '@/components';
import type { SearchData } from './types';
import { Empty } from 'antd';

const data: SearchData[] = [
  {
    id: 1,
    groupName: '分组1',
    list: [
      {
        id: 1,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
      {
        id: 2,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
      {
        id: 3,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
    ],
  },
  {
    id: 2,
    groupName: '分组2',
    list: [
      {
        id: 11,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
      {
        id: 22,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
      {
        id: 33,
        title: '苹果',
        icon: 'notification-line',
        description: '苹果',
      },
    ],
  },
];

export default function SearchList({ value }: { value: string }) {
  const [items, setItems] = useState<SearchData[]>([]);
  const getData = async () => {
    const items = await new Promise<SearchData[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.random() * 10 > 5 ? data : []);
      }, 200);
    });
    setItems(items);
  };
  useEffect(() => {
    getData();
  }, [value]);

  if (items.length === 0) {
    return (
      <div className="flex-center pt-80">
        <Empty />
      </div>
    );
  }

  return items.map((item, index) => {
    return (
      <div key={index}>
        <div className="px-8 text-[#999] text-[12px]">{item.groupName}</div>
        <ul className="my-8">
          {item.list.map((record) => {
            return (
              <li
                key={record.id}
                className="flex justify-between items-center px-8 py-10 rounded-8 hover:bg-[#ededed] cursor-pointer transition"
              >
                <div className="pr-10">
                  <Icon name={record.icon} />
                  <span className="mx-5 text-[14px]">{record.title}</span>
                </div>
                <div className="text-[#999] text-[13px]">{record.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}
