import React from 'react';
import { useAppStore, usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { Icon } from '@/components';

export default function Menu() {
  const { logo } = useAppStore((state) => state.app, shallow);
  const { serverMenus } = usePermissionStore((state) => state, shallow);

  return (
    <div className="w-80 min-w-80 h-full" style={{ backgroundColor: 'rgb(0, 21, 41)' }}>
      <div className="flex justify-center py-10">
        <img src={logo} className="h-32 w-32" />
      </div>
      <ul className="w-full py-10">
        {serverMenus.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-col items-center mb-12 text-white cursor-pointer"
            >
              {item.icon && <div>{React.createElement(Icon, { name: item.icon, size: 20 })}</div>}
              <div className="px-4">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
