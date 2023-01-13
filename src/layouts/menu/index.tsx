import React from "react";
import { Menu } from "antd";
import { isWhite } from "@/utils/color";
import { menus } from "@/common/menus";
import { SiderSubMenu } from "./components/SiderSubMenu";
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
      {SiderSubMenu(menus)}
    </Menu>
  );
}

export default React.memo(SiderMenu);
