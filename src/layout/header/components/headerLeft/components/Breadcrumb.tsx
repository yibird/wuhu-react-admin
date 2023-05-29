import React, { useMemo } from "react";
import { Breadcrumb as ABreadcrumb, MenuProps } from "antd";
import { usePermissionStore, useTabStore } from "@/store";
import { toTree } from "@/utils/tree";
import { IMenuItem } from "@/common/menus";
import { Link } from "react-router-dom";

function getItem(menus?: IMenuItem[]) {
  if (!menus || (menus && menus.length === 0)) return undefined;
  return {
    items: menus.map(({ id, title, path }) => {
      return {
        key: id,
        label: <Link to={path!}>{title}</Link>,
      };
    }),
  };
}

function Breadcrumb() {
  const { flatMenus } = usePermissionStore();
  const { list, current } = useTabStore();
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
