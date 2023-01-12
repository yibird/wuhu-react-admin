import React from "react";
import { Drawer, Divider, Space, Button } from "antd";
import Theme from "./components/theme";
import NavBarMode from "./components/navBarMode";
import SysTheme from "./components/sysTheme";
import TopBarTheme from "./components/topBarTheme";
import MenuTheme from "./components/menuTheme";
import UIFeat from "./components/uiFeat";
import UIDisplay from "./components/uiDisplay";
import Animation from "./components/animation";
import Config from "./components/config";

interface Props {
  open?: boolean;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

function AppSetting({ open, onClose }: Props) {
  return (
    <Drawer title="项目设置" placement="right" onClose={onClose} open={open}>
      <Theme />
      <NavBarMode />
      <SysTheme />
      <TopBarTheme />
      <MenuTheme />
      <UIFeat />
      <UIDisplay />
      <Animation />

      <Config />
    </Drawer>
  );
}

export default AppSetting;
