import React from 'react';
import FlatSider from './flat';
import BilayerSider from './bilayer';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { SiderModeEnum } from '@/enums';

export default function LayoutSider() {
  const { mode } = useAppStore((state) => state.sider, shallow);
  return mode === SiderModeEnum.FLAT ? <FlatSider /> : <BilayerSider />;
}
