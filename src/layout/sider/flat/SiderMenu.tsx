import React, { useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import { useMenus } from '@/hooks';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { renderMenus } from '../util';
import { ScrollBar } from '@/components';
import GroupNav from './GroupNav';
import Search from './Search';
import type { IMenu } from '#/config';

const getKeys = (menu: IMenu) => {
  return {
    openKeys: menu ? (menu.levelPath || '').split('-') : [],
    selectedKeys: menu ? [menu.id.toString()] : [],
  };
};

export default function SiderMenu() {
  const { sider } = useAppStore(useSelector('sider')),
    { menuTheme, collapsed, themeColor } = sider;
  const { serverMenus, flatMenusCache } = usePermissionStore(
    useSelector(['serverMenus', 'flatMenusCache']),
  );
  const { current, currentMenu, openMenu } = useMenus();

  const [menus, setMenus] = useState<IMenu[]>(serverMenus);
  const [keys, setKeys] = useState(getKeys(currentMenu));

  const getItems = useMemo(() => renderMenus(menus), [menus]);
  // ===================== effect
  useEffect(() => {
    setKeys(getKeys(currentMenu));
  }, [current]);

  function searchMenus(menus: IMenu[], value: string) {
    return menus;
  }

  const handleSearchMenus = (value: string) => {
    setMenus(value ? searchMenus(serverMenus, value) : serverMenus);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <GroupNav collapsed={collapsed} />
      <Search onChange={handleSearchMenus} collapsed={collapsed} />
      <ScrollBar style={{ flex: '1 0 0' }}>
        <Menu
          {...keys}
          items={getItems}
          theme={menuTheme}
          style={{ backgroundColor: themeColor }}
          onClick={({ key }) => openMenu(key)}
          onOpenChange={(openKeys) => setKeys({ ...keys, openKeys })}
          mode="inline"
          inlineIndent={15}
        />
      </ScrollBar>
    </div>
  );
}
