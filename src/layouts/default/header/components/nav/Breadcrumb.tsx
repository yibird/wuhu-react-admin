import React, { useMemo } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { usePermissionStore, useTabStore } from '@/store';
import { toTree } from '@/utils/tree';
import { IMenuItem } from '@/common/menus';

function NavBreadcrumb() {
  const { flatMenus } = usePermissionStore();
  const { items, current, addTab } = useTabStore();

  const getMenu = (menus: IMenuItem[]) => {
    if (!menus || (menus && menus.length === 0)) return;
    const items = menus.map((item, index) => ({ key: index, title: item.title }));
    const onClick = ({ key }: { key: string }) => addTab(menus[Number(key)]);
    return { items, onClick };
  };

  const getItems: BreadcrumbProps['items'] = useMemo(() => {
    const menus = toTree(flatMenus, items[current].id);
    return menus.map(({ title, children }) => ({ title, menu: getMenu(children!) }));
  }, [flatMenus, items, current]);

  return <Breadcrumb className="mx-10" items={getItems} />;
}

export default NavBreadcrumb;
