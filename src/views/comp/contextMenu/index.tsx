import React from 'react';
import { Trigger, ContextMenu } from '@/components/ContextMenu';
export default function ContextMenuComp() {
  const items = [
    {
      type: 'click',
      title: '菜单1111111',
    },
    {
      type: 'click',
      title: '菜单1111111',
    },
    {
      type: 'click',
      title: '菜单1111111',
    },
    {
      type: 'click',
      title: '菜单1111111',
    },
    {
      type: 'click',
      title: '菜单1111111',
    },
  ];
  return (
    <div style={{ paddingTop: '0%', paddingLeft: '90%' }}>
      <Trigger id="menu1">
        <div>点我啊</div>
      </Trigger>
      <ContextMenu id="menu1" items={items}></ContextMenu>
    </div>
  );
}
