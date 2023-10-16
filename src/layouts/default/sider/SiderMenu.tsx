import React, { useEffect, useMemo, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import type { IMenuItem } from '@/common/menus';
import { Icon } from '@/components';
import { treeMap } from '@/utils/tree';
import { useTab } from '@/layouts/default/tabs/hooks';
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

function SiderMenu() {
  console.log('SiderMenu');
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { theme, themeColor, menuMode } = useAppStore((state) => state.sider, shallow);
  const { serverMenus, flatMenus } = usePermissionStore((state) => state, shallow);
  const { items, current, addTab } = useTab();

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
    setOpenKeys(openKeys);
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
      mode={menuMode}
      theme={theme}
      style={{ backgroundColor: themeColor }}
      onClick={onClick}
      onOpenChange={onOpenChange}
    />
  );
}

export default React.memo(SiderMenu);
