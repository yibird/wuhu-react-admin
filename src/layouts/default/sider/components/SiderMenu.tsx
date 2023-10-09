import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import type { IMenuItem } from '@/common/menus';
import { Icon } from '@/components';
import { treeMap } from '@/utils/tree';
import { useTab } from '@/layouts/default/tabs/hooks';
import { usePermissionStore } from '@/store';
import { isWhite } from '@/utils/color';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(item: IMenuItem) {
  const { id, icon, children = [], title } = item;
  return {
    id,
    key: id,
    label: title,
    icon: React.createElement(Icon, { name: icon! }, null),
    children: children.length > 0 ? children : undefined,
  } as MenuItem;
}

function SiderMenu({ themeColor }: { themeColor?: string }) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const { serverMenus, flatMenus } = usePermissionStore();
  const { items, current, addTab } = useTab();

  const getItems = useMemo(() => {
    return treeMap(serverMenus, (item) => getItem(item));
  }, [serverMenus]);

  const selectedKeys = useMemo(() => {
    return items[current] ? [items[current].id.toString()] : [];
  }, [items, current]);

  useEffect(() => {
    const openKeys = (items[current].levelPath || '').split('-');
    setOpenKeys(openKeys);
  }, [items, current]);

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
      mode="inline"
      theme={isWhite(themeColor!) ? 'light' : 'dark'}
      style={{ backgroundColor: themeColor }}
      onClick={onClick}
      onOpenChange={onOpenChange}
    />
  );
}

export default React.memo(SiderMenu);
