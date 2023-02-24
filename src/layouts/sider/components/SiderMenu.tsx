import React, { useMemo } from "react";
import { Menu, MenuProps } from "antd";
import { isWhite } from "@/utils/color";
import { IMenuItem } from "@/common/menus";
import Icon from "@/components/Icon";
import { treeMap } from "@/utils/tree";
import { useTab } from "@/layouts/tabs/hooks";
import { useStore } from "@/store";
import { useMount } from "ahooks";

type MenuItem = Required<MenuProps>["items"][number];

function getItem({ id, icon, children, title }: IMenuItem) {
  return {
    id,
    key: id,
    label: title,
    icon: React.createElement(Icon, { name: icon! }, null),
    children: children && children.length > 0 ? children : undefined,
  } as MenuItem;
}

export interface SiderMenuProps {
  themeColor?: string;
}

function SiderMenu({ themeColor }: SiderMenuProps) {
  const { serverMenus, flatMenus, tabList, current } = useStore();
  const { addTab } = useTab();

  useMount(() => {
    const homeItem = flatMenus.find(({ type, home }) => type && home);
    homeItem && addTab(homeItem);
  });

  const items = useMemo(() => {
    return treeMap(serverMenus, (item) => getItem(item));
  }, [serverMenus]);

  const selectedKeys = useMemo(() => {
    return tabList[current] ? [String(tabList[current].id)] : [];
  }, [tabList, current]);

  // const openKeys = useMemo(() => {
  //   return tabList[current] ? tabList[current].levelPath?.split("-") : [];
  // }, [tabList, current]);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    const menu = flatMenus.find((item) => item.id === Number(key));
    menu && addTab(menu);
  };

  return (
    <Menu
      onClick={onClick}
      items={items}
      // openKeys={openKeys}
      selectedKeys={selectedKeys}
      mode="inline"
      theme={isWhite(themeColor!) ? "light" : "dark"}
      style={{ backgroundColor: themeColor }}
    />
  );
}

export default React.memo(SiderMenu);
