import React from 'react';
import Icon from '@/components/Icon';
import { useAppStore } from '@/store';
import { eq } from 'lodash-es';

function Collapsed() {
  const collapsed = useAppStore((state) => state.menuSetting.collapsed, eq),
    setCollapsed = useAppStore((state) => state.setCollapsed);

  return (
    <div
      onClick={() => setCollapsed(!collapsed)}
      className="layout-header-collapsed inline px-10 cursor-pointer h-full"
      style={{ transform: `rotate(${collapsed ? 180 : 0}deg)` }}
    >
      <Icon name="indent-decrease" size={18} />
    </div>
  );
}

export default Collapsed;
