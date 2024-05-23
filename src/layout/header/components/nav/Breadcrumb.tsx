import React, { useMemo } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { Icon } from '@/components';
import { useMenus } from '@/hooks';
import { toTree } from '@/utils/tree';
import type { IMenu } from '#/config';

function BreadCrumbTitle({ title, icon }: IMenu) {
  return (
    <div className="inline-flex align-item">
      <span>{title}</span>
      {icon && <Icon name={icon} className="ml-4" />}
    </div>
  );
}

const getMenu = (menus: IMenu[], openMenu: (menu: IMenu) => void) => {
  if (!menus || (menus && menus.length === 0)) return;
  const items = menus.map((item, index) => ({ key: index, title: item.title }));
  const onClick = ({ key }: { key: string }) => {
    openMenu(menus[Number(key)]);
  };
  return { items, onClick };
};

export default function NavBreadcrumb() {
  const { header } = useAppStore(useSelector(['header']));
  const { flatMenus } = usePermissionStore(useSelector(['flatMenus']));
  const { current, openMenus, openMenu } = useMenus();
  if (!header.showBreadcrumb) return;

  const getItems: BreadcrumbProps['items'] = useMemo(() => {
    if (openMenus.length === 0) return [];
    const menus = toTree(flatMenus, openMenus[current].id);
    return menus.map((item) => {
      return {
        title: header.showBreadCrumbIcon ? BreadCrumbTitle(item) : item.title,
        menu: getMenu(item.children!, openMenu),
      };
    });
  }, [flatMenus, openMenus, current]);

  return <Breadcrumb className="mx-10" items={getItems} />;
}
