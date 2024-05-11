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
        <img src={logo} className="size-40" />
      </div>
      <div className="h-50 flex-1 flex-center text-sm truncate b-b-f5">{name}</div>
    </div>
  );
}
