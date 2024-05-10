import React from 'react';
import { Icon } from '@/components';

const items = [
  {
    icon: 'emotion-happy-line',
  },
  {
    icon: 'image-line',
  },
  {
    icon: 'folder-line',
  },
  {
    icon: 'star-smile-fill',
  },
];

export default function ActionBar() {
  return (
    <div className="px-10 pt-8">
      <ul className="flex justify-center">
        {items.map((item, i) => {
          return (
            <li
              key={i}
              className="flex-center mr-10 :last:mr-0 box-border cursor-pointer text-[#999]"
            >
              <span className="transition-all hover:text-[#666] hover:scale-120">
                <Icon name={item.icon} size={22} />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
