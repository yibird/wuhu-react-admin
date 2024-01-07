import React from 'react';
import { Drawer, Space } from 'antd';
import Theme from './components/theme';
import NavBarMode from './components/navBarMode';
import ThemeSetting from './components/themeSetting';
import UIFeat from './components/uiFeat';
import UIDisplay from './components/uiDisplay';
import Animation from './components/animation';
import Config from './components/config';

interface Props {
  open?: boolean;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

function AppSetting({ open, onClose }: Props) {
  return (
    <Drawer title="项目设置" placement="right" onClose={onClose} open={open}>
      <Theme />
      <Space direction="vertical" className="w-full">
        <NavBarMode />
        <ThemeSetting />
      </Space>
      <UIFeat />
      <UIDisplay />
      <Animation />
      <Config />
    </Drawer>
  );
}

export default AppSetting;
