import React from 'react';
import { Command } from 'cmdk';
import { createPortal } from 'react-dom';
import { Icon } from '@/components';

interface SearchDialogProps {}

interface SearchDataList {
  id: number;
  title: string;
  icon: string;
  description: string;
}
interface SearchData {
  id: number;
  groupName: string;
  list: SearchDataList[];
}

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

function SearchList({ items }: { items: SearchData[] }) {
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

function SearchDialog({ open }: { open: boolean }) {
  return (
    <div
      className="fixed flex-center full inset-0 overflow-hidden"
      style={{ zIndex: 100, backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <div className="bg-white w-700 rounded-8 overflow-hidden">
        {/* header */}
        <div>
          <input
            className="w-full h-40 m-0 px-10 box-border rounded-e-10 outline-none border-none"
            placeholder="请输入搜索内容"
          />
        </div>
        {/* body */}
        <div
          className="min-h-500 px-8 pt-10"
          style={{
            borderTop: '1px solid #e2e2e2',
            borderBottom: '1px solid #e2e2e2',
          }}
        >
          <SearchList items={data} />
        </div>
        {/* footer */}
        <div className="flex justify-between py-10 px-10">
          <div>1111111</div>
          <div>application</div>
        </div>
      </div>
    </div>
  );
}
export default createPortal(<SearchDialog open={true} />, document.body);
