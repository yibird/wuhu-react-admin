import React from 'react';
import { Icon } from '@/components';
import { useAppStore } from '@/store';

function Collapsed() {
  const { setCollapsed, menuSetting } = useAppStore();
  return (
    <div
      onClick={() => setCollapsed(!menuSetting.collapsed)}
      className="layout-header-collapsed inline px-10 cursor-pointer h-full"
      style={{ transform: `rotate(${menuSetting.collapsed ? 180 : 0}deg)` }}
    >
      <Icon name="indent-decrease" size={18} />
    </div>
  );
}

export default Collapsed;
