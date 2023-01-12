import React from "react";
import { Menu } from "antd";
import { isWhite } from "@/utils/color";

interface SiderMenuProps {
  themeColor?: string;
}

function SiderMenu({ themeColor }: SiderMenuProps) {
  return (
    <Menu
      mode="inline"
      theme={isWhite(themeColor!) ? "light" : "dark"}
      style={{ backgroundColor: themeColor }}
    >
      <Menu.Item key={1}>menu 1</Menu.Item>
      <Menu.Item key={2}>menu 2</Menu.Item>
      <Menu.SubMenu title={"asdasd"}>
        <Menu.Item key={3}>menu 3</Menu.Item>
        <Menu.Item key={4}>menu 4</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default React.memo(SiderMenu);
