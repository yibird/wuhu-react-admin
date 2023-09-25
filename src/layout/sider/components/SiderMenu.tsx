import React, { useMemo, useRef } from 'react';
import { Menu, MenuProps } from 'antd';
import { isWhite } from '@/utils/color';
import { IMenuItem } from '@/common/menus';
import { Icon } from '@/components';
import { treeMap } from '@/utils/tree';
import { useTab } from '@/layout/tabs/hooks';
import { useMount } from 'ahooks';
import { usePermissionStore, useTabStore } from '@/store';
import { getElementByClass } from '@/utils/dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem({ id, icon, children, title }: IMenuItem) {
  return {
    id,
    key: id,
    label: title,
    icon: React.createElement(Icon, { name: icon! }, null),
    children: children && children.length > 0 ? children : undefined,
  } as MenuItem;
}
function SiderMenu({ themeColor }: { themeColor?: string }) {
  const { serverMenus, flatMenus } = usePermissionStore();
  const { list, current } = useTabStore();
  const tabsRef = useRef(getElementByClass('tabs-body-list') as HTMLElement);
  const { addTab } = useTab(tabsRef);

  useMount(() => {
    // const homeItem = flatMenus.find(({ type, home }) => type && home);
    // homeItem && addTab(homeItem);
  });

  const items = useMemo(() => {
    return treeMap(serverMenus, (item) => getItem(item));
  }, [serverMenus]);

  const selectedKeys = useMemo(() => {
    return list[current] ? [String(list[current].id)] : [];
  }, [list, current]);

  // const openKeys = useMemo(() => {
  //   return tabList[current] ? tabList[current].levelPath?.split("-") : [];
  // }, [tabList, current]);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const menu = flatMenus.find((item) => item.id === Number(key));
    if (!menu) return;
    addTab(menu);
  };

  return (
    <Menu
      onClick={onClick}
      items={items}
      // openKeys={openKeys}
      selectedKeys={selectedKeys}
      mode="inline"
      theme={isWhite(themeColor!) ? 'light' : 'dark'}
      style={{ backgroundColor: themeColor }}
    />
  );
}

export default React.memo(SiderMenu);
