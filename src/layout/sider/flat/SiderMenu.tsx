import React, { useEffect, useMemo, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import type { IMenuItem } from '@/common/menus';
import { Icon } from '@/components';
import { treeMap } from '@/utils/tree';
import { useTabs } from '@/hooks/store/useTabs';
import { useAppStore, usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(item: IMenuItem) {
  const { id, icon, children = [], title } = item;
  return {
    id,
    key: id,
    label: title,
    icon: React.createElement(Icon, { name: icon! }, null),
    children: children.length ? children : undefined,
  } as MenuItem;
}

export default function SiderMenu() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { menuTheme, collapsed } = useAppStore((state) => state.sider, shallow);
  const { serverMenus, flatMenus } = usePermissionStore((state) => state, shallow);
  const { items, current, addTab } = useTabs();

  const getItems = useMemo(() => {
    return treeMap(serverMenus, (item) => getItem(item));
  }, [serverMenus]);

  const selectedKeys = useMemo(() => {
    if (!items[current]) return [];
    return items[current].id.toString().split(' ');
  }, [items, current]);

  // ===================== effect

  useEffect(() => {
    if (items.length === 0) return;
    const openKeys = (items[current].levelPath || '').split('-');
    setOpenKeys(collapsed ? [] : openKeys);
  }, [items, current]);

  // ===================== handle

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const menu = flatMenus.find((item) => item.id === Number(key))!;
    addTab(menu);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    setOpenKeys(openKeys);
  };
  return (
    <Menu
      items={getItems}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      theme={menuTheme}
      mode="inline"
      // style={{ backgroundColor: themeColor }}
      onClick={onClick}
      onOpenChange={onOpenChange}
    />
  );
}
