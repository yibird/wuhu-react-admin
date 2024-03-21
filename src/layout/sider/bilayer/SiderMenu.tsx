import React, { type ReactNode, useMemo } from 'react';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { shallow } from 'zustand/shallow';
import { Menu } from 'antd';
import { useTabs } from '@/hooks/store/useTabs';
import { renderMenus, renderIcon } from '../util';

export default function SiderMenu() {
  const { serverMenus, menuMap } = usePermissionStore(useSelector(['serverMenus', 'menuMap']));
  const { current, tabList, changeTabById } = useTabs();

  // 获取当前选中菜单项最顶层菜单id
  const { selectedKeys, topMenuId } = useMemo(() => {
    if (!tabList[current]) return;
    const levelPath = tabList[current].levelPath || '';
    const selectedKeys = levelPath.split('-');
    const topMenuId = Number(selectedKeys[0]);
    return { selectedKeys, topMenuId };
  }, [current])!;

  // 获取子菜单项
  const getChildMenuItems = useMemo(() => {
    const menu = menuMap.get(topMenuId);
    if (!menu) return [];
    return renderMenus(menu.children);
  }, [serverMenus, topMenuId]);

  const onClick = ({ key }: { key: string }) => {
    changeTabById(Number(key));
  };

  return (
    <div className="full flex">
      {/* parentMenu */}
      <ul className="w-80 min-w-80 h-full" style={{ backgroundColor: 'rgb(0, 21, 41)' }}>
        {serverMenus.map((item) => {
          return (
            <li
              style={{
                color: item.id === topMenuId ? 'red' : '',
              }}
              key={item.id}
              className="flex flex-col items-center py-10 text-white cursor-pointer"
            >
              {renderIcon(item.icon, 18)}
              <div className="px-4 text-xs">{item.title}</div>
            </li>
          );
        })}
      </ul>
      {/* childrenMenu */}
      <Menu
        items={getChildMenuItems}
        selectedKeys={selectedKeys}
        onClick={onClick}
        mode="inline"
        className="flex-1"
        style={{
          borderInline: 'none',
        }}
      />
    </div>
  );
}
