import React from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function Logo({ collapsedWidth }: { collapsedWidth: string | number }) {
  const { logo, name } = useAppStore((state) => state.app, shallow);
  return (
    <div className="flex bg-white">
      <div
        className="flex justify-center py-10"
        style={{
          backgroundColor: 'rgb(0, 21, 41)',
          width: collapsedWidth,
          minWidth: collapsedWidth,
        }}
      >
        <img src={logo} className="h-32 w-32" />
      </div>
      <div className="flex-1 flex-center text-lg truncate">{name}</div>
    </div>
  );
}
