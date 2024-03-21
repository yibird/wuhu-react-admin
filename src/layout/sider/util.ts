import React from 'react';
import { Icon } from '@/components';
import type { IMenu } from '#/config';
import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];
export function useMenus(menus: IMenu[]) {}

export function renderIcon(name: Nullable<string> | undefined, size: number = 20) {
  if (!name) return;
  return React.createElement(Icon, { name, size });
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
