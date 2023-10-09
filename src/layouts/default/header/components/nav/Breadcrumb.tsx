import React, { useMemo } from 'react';
import { Breadcrumb } from 'antd';
import { usePermissionStore, useTabStore } from '@/store';
import { toTree } from '@/utils/tree';
import { IMenuItem } from '@/common/menus';

function getItem(menus: IMenuItem[] = []) {
  const { addTab } = useTabStore();
  if (menus.length === 0) return;
  return {
    items: menus.map((menu) => {
      return {
        key: menu.id,
        label: <div onClick={() => addTab(menu)}>{menu.title}</div>,
        onSelect() {
          console.log('111');
        },
      };
    }),
  };
}

function NavBreadcrumb() {
  const { flatMenus } = usePermissionStore();
  const { items, current } = useTabStore();

  const getItems = useMemo(() => {
    return toTree(flatMenus, items[current].id).map((item) => {
      return {
        title: item.title,
      };
    });
  }, [flatMenus, items, current]);

  return (
    <Breadcrumb className="mx-10" items={getItems}>
      {/* {menus.map((item) => {
        return (
          <Breadcrumb.Item key={item.id} menu={getItem(item.children)}>
            {item.title}
          </Breadcrumb.Item>
        );
      })} */}
    </Breadcrumb>
  );
}

export default NavBreadcrumb;
