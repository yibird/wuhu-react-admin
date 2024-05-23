import React, { useMemo, useState } from 'react';
import { usePermissionStore, useSelector } from '@/store';
import { Menu } from 'antd';
import { useMenus } from '@/hooks';
import { renderMenus, renderIcon } from '../util';
import type { IMenu } from '#/config';

export default function SiderMenu() {
  const [topMenuId, setTopMenuId] = useState(-1);
  const { serverMenus, flatMenusCache } = usePermissionStore(
    useSelector(['serverMenus', 'flatMenusCache']),
  );
  const { current, currentMenu, openMenuById } = useMenus();

  const selectedKeys = useMemo(() => {
    if (!currentMenu) return;
    const selectedKeys = (currentMenu.levelPath || '').split('-');
    if (selectedKeys && selectedKeys.length > 0) {
      setTopMenuId(Number(selectedKeys[0]));
    }
    return selectedKeys;
  }, [current]);

  // 获取子菜单项
  const getChildMenuItems = useMemo(() => {
    const menu = flatMenusCache.get(topMenuId);
    if (!menu) return [];
    return renderMenus(menu.children);
  }, [serverMenus, topMenuId]);

  const handleClick = (item: IMenu) => {
    const menu = (item.children || []).find((item) => item.type === 1);
    setTopMenuId(item.id);
    menu && openMenuById(menu.id);
  };
  const onClick = ({ key }: { key: string }) => {
    openMenuById(Number(key));
  };

  return (
    <div className="full flex">
      {/* parentMenu */}
      <ul className="w-80 min-w-80 h-full" style={{ backgroundColor: 'rgb(0, 21, 41)' }}>
        {serverMenus.map((item, index) => {
          return (
            <li
              style={{
                color: item.id === topMenuId ? 'var(--primary-color)' : '',
              }}
              key={item.id}
              className="flex flex-col items-center py-10 text-white cursor-pointer"
              onClick={() => handleClick(item)}
            >
              {renderIcon(item.icon, 18)}
              <div className="mt-10 px-4 text-xs">{item.title}</div>
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
        className="flex-1 overflow-hidden border-e-0!"
      />
    </div>
  );
}
