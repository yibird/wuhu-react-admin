import React, { useMemo } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { useAppStore, usePermissionStore, useTabStore } from '@/store';
import { toTree } from '@/utils/tree';
import { IMenuItem } from '@/common/menus';
import { shallow } from 'zustand/shallow';
import { Icon } from '@/components';

function BreadCrumbTitle({ title, icon }: IMenuItem) {
  return (
    <div className="inline-flex align-item">
      <span>{title}</span>
      {icon && <Icon name={icon} className="ml-4" />}
    </div>
  );
}

function NavBreadcrumb() {
  const { showBreadcrumb, showBreadCrumbIcon } = useAppStore(
    (state) => state.headerSetting,
    shallow,
  );

  if (!showBreadcrumb) return;

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
