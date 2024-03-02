import React from 'react';
import { Menu, type GetProp, type MenuProps } from 'antd';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

type MenuItem = GetProp<MenuProps, 'items'>[number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', '1', null),
  getItem('Navigation Two', '2', null),
  getItem('Navigation Two', 'sub1', null, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', null, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    null,
  ),
];
export default function SubMenu() {
  return <Menu items={items} mode="inline" className="flex-1" />;
}
