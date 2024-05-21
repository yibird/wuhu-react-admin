import React, { useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import { useTabs } from '@/hooks/store/useTabs';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { shallow } from 'zustand/shallow';
import { renderMenus } from '../util';
import { ScrollBar } from '@/components';
import ActionBar from './ActionBar';
import Search from './Search';
import { IMenu } from '#/config';

const getKeys = (menu: IMenu) => {
  if (!menu) {
    return {
      openKeys: [],
      selectedKeys: [],
    };
  }
  return {
    openKeys: (menu.levelPath || '').split('-'),
    selectedKeys: [menu.id.toString()],
  };
};

export default function SiderMenu() {
  console.log('render SiderMenu');
  const { menuTheme, collapsed, themeColor } = useAppStore((state) => state.sider, shallow);
  const serverMenus = usePermissionStore((state) => state.serverMenus, shallow);
  const { tabList, current, openTabById } = useTabs();

  const [keys, setKeys] = useState(getKeys(tabList[current]));
  const items = useMemo(() => renderMenus(serverMenus), [serverMenus]);

  // ===================== effect
  useEffect(() => {
    const currentTab = tabList[current];
    if (!currentTab) return;
    setKeys(getKeys(tabList[current]));
  }, [current]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ActionBar collapsed={collapsed} />
      <Search collapsed={collapsed} />
      <ScrollBar style={{ flex: '1 0 0' }}>
        <Menu
          items={items}
          {...keys}
          theme={menuTheme}
          style={{ backgroundColor: themeColor }}
          onClick={({ key }) => openTabById(key)}
          onOpenChange={(openKeys) => setKeys({ ...keys, openKeys })}
          mode="inline"
          inlineIndent={15}
        />
      </ScrollBar>
    </div>
  );
}
