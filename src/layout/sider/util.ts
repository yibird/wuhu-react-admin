import React from 'react';
import { Icon } from '@/components';
import type { IMenu } from '#/config';
import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];
export function useMenus(menus: IMenu[]) {}

export function renderIcon(name: Nullable<string> | undefined, size: number = 18) {
  if (!name) return;
  const icon = React.createElement(Icon, { name, size });
  return React.createElement(
    'div',
    {
      style: {
        backgroundColor: '#faad14',
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      },
    },
    icon,
  );
}

export function renderMenus(menus: IMenu[] = []): MenuItem[] | undefined {
  if (menus.length === 0) return [];
  return menus.map((item) => {
    return {
      key: item.id,
      label: item.title,
      icon: renderIcon(item.icon),
      children: item.type === 0 ? renderMenus(item.children) : undefined,
    } as MenuItem;
  });
}
