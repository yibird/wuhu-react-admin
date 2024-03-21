import React, { useMemo } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { useAppStore, usePermissionStore, useTabStore } from '@/store';
import { toTree } from '@/utils/tree';
import { IMenu } from '@/common/menus';
import { shallow } from 'zustand/shallow';
import { Icon } from '@/components';
import { useTabs } from '@/hooks/store/useTabs';

function BreadCrumbTitle({ title, icon }: IMenu) {
  return (
    <div className="inline-flex align-item">
      <span>{title}</span>
      {icon && <Icon name={icon} className="ml-4" />}
    </div>
  );
}

function NavBreadcrumb() {
  const { showBreadcrumb, showBreadCrumbIcon } = useAppStore((state) => state.header, shallow);
  const flatMenus = usePermissionStore((state) => state.flatMenus, shallow);
  const { items, current, addTab } = useTabs();

  if (!showBreadcrumb) return;

  const getMenu = (menus: IMenu[]) => {
    if (!menus || (menus && menus.length === 0)) return;
    const items = menus.map((item, index) => ({ key: index, title: item.title }));
    const onClick = ({ key }: { key: string }) => {
      addTab(menus[Number(key)]);
    };
    return { items, onClick };
  };

  const getItems: BreadcrumbProps['items'] = useMemo(() => {
    if (items.length === 0) return [];
    const menus = toTree(flatMenus, items[current].id);
    return menus.map((item) => {
      return {
        title: showBreadCrumbIcon ? BreadCrumbTitle(item) : item.title,
        menu: getMenu(item.children!),
      };
    });
  }, [flatMenus, items, current]);

  return <Breadcrumb className="mx-10" items={getItems} />;
}

export default NavBreadcrumb;
