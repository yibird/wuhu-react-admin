import React from "react";
import { Menu } from "antd";
import Icon from "@/components/Icon";
import type { IMenus } from "@/common/menus";
const { Item, SubMenu } = Menu;

export function SiderSubMenu(menus: IMenus[] = []) {
  return (
    <>
      {menus.map((item) => {
        const { id, title, path, icon, children = [] } = item;
        if (children.length) {
          return (
            <SubMenu
              key={id}
              title={title}
              icon={icon && <Icon name={icon} size={20} />}
            >
              {SiderSubMenu(children)}
            </SubMenu>
          );
        }
        return <Item key={id}>{title}</Item>;
      })}
    </>
  );
}
