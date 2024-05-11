import React, { useState } from 'react';

import { Avatar } from 'antd';

const items = [1, 2, 3];
export default function MessageList() {
  const [value, setValue] = useState(0);

  const handleClick = (value: number) => {
    setValue(value);
  };

  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li
            onClick={() => handleClick(i)}
            key={item}
            style={{
              backgroundColor: i === value ? '#ebebeb' : '',
            }}
            className="flex items-center px-10 py-12 hover:bg-[#ebebeb] transition-all duration-300"
          >
            <Avatar
              size={40}
              src={
                <img src="https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg" />
              }
            />
            <div className="flex-1 ml-10">
              <div className="text-sm truncate">休息休息吧奇迹人</div>
              <div className="text-xs truncate">休息休息吧奇迹人</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
