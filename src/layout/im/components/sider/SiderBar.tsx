import React, { useMemo, useState } from 'react';
import { Avatar } from 'antd';
import { Icon } from '@/components';

const menus = [
  {
    icon: 'chat-2-line',
    title: '',
    path: '',
  },
  {
    icon: 'group-line',
    title: '',
    path: '',
  },
];

const styles = {
  ACTIVE: {
    backgroundColor: '#ebebeb',
    color: 'var(--primary-color)',
  },
};

export default function SiderBar() {
  const [value, setValue] = useState(0);

  const handleClick = (value: number) => {
    setValue(value);
  };

  return (
    <div className="w-60 min-w-60 max-w-60 box-border text-center">
      <div className="h-50 flex-center">
        <Avatar
          size={40}
          src={
            <img
              src="https://cdn.pixabay.com/photo/2023/12/26/17/38/ai-generated-8470716_960_720.png%201x,%20https://cdn.pixabay.com/photo/2023/12/26/17/38/ai-generated-8470716_1280.png"
              alt="avatar"
            />
          }
        />
      </div>
      <ul>
        {menus.map((item, i) => {
          return (
            <li onClick={() => handleClick(i)} className="py-5" key={i}>
              <span
                className="size-40 inline-flex items-center justify-center rounded-4 cursor-pointer transition-all duration-300 hover:bg-[#ebebeb]"
                style={value === i ? styles.ACTIVE : {}}
              >
                <Icon name={item.icon} size={22} />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
