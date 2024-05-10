import React, { useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import { useTabs } from '@/hooks/store/useTabs';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { shallow } from 'zustand/shallow';
import { renderMenus } from '../util';

import ActionBar from './ActionBar';
import Search from './Search';

export default function SiderMenu() {
  const { menuTheme, collapsed } = useAppStore((state) => state.sider, shallow);
  const { serverMenus } = usePermissionStore(useSelector('serverMenus'));
  const { tabList, current, getLen, changeTabById } = useTabs();

  const [openKeys, setOpenKeys] = useState<string[]>();

  const items = useMemo(() => renderMenus(serverMenus), [serverMenus]);
  const selectedKeys = useMemo(() => {
    console.log(tabList, current);
    if (!tabList[current]) return [];

    return tabList[current].id.toString().split(' ');
  }, [tabList, current]);

  // ===================== effect
  useEffect(() => {
    if (getLen === 0) return;
    const openKeys = (tabList[current].levelPath || '').split('-');
    setOpenKeys(collapsed ? [] : openKeys);
  }, [current]);

  // ===================== handle
  const onOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };

  const menuTypeOptions = [
    {
      icon: '123',
      value: 0,
    },
    {
      icon: '111',
      value: 1,
    },
    {
      icon: '222',
      value: 2,
    },
  ];

  return (
    <div>
      <ActionBar collapsed={collapsed} />
      <Search collapsed={collapsed} />
      <Menu
        items={items}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        theme={menuTheme}
        // style={{ backgroundColor: themeColor }}
        onClick={({ key }) => changeTabById(key)}
        onOpenChange={onOpenChange}
        mode="inline"
        inlineIndent={15}
      />
    </div>
  );
}
