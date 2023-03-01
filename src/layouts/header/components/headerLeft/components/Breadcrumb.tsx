import React, { useMemo } from "react";
import { Breadcrumb as ABreadcrumb, MenuProps } from "antd";
import { useStoreSelector } from "@/store";
import { toTree } from "@/utils/tree";
import { IMenuItem } from "@/common/menus";

function getItem(menus?: IMenuItem[]): MenuProps | undefined {
  if (!menus) return;
  return { items: menus.map(({ id, title }) => ({ key: id, label: title })) };
}

function Breadcrumb() {
  return null;
  const { flatMenus } = useStoreSelector.usePermission();
  const { list, current } = useStoreSelector.useTab();

  const menus = useMemo(() => {
    if (!flatMenus[current]) return [];
    const item = flatMenus.find((item) => item.id === list[current].id)!;
    return toTree(flatMenus, item.id);
  }, [current]);

  return (
    <ABreadcrumb className="mx-10">
      {menus.map((item) => {
        return (
          <ABreadcrumb.Item key={item.id} menu={getItem(item.children)}>
            {item.title}
          </ABreadcrumb.Item>
        );
      })}
    </ABreadcrumb>
  );
}

export default Breadcrumb;
