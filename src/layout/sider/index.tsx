import React from 'react';
import FlatSider from './flat';
import BilayerSider from './bilayer';
import { useAppStore } from '@/store';
import { SiderModeEnum } from '@/enums';

const siders = {
  [SiderModeEnum.FLAT]: <FlatSider />,
  [SiderModeEnum.BILAYER]: <BilayerSider />,
};

export default function LayoutSider() {
  const mode = useAppStore((state) => state.sider.mode);
  return siders[mode];
}
