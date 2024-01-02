import React from 'react';
import { Divider } from 'antd';
import { Trigger, ContextMenu } from '@/components/ContextMenu';
import type { ContextMenuItem } from '@/components/ContextMenu';
import { Icon } from '@/components';

export default function ContextMenuComp() {
  const items = [
    {
      type: 'click',
      title: '菜单1111111',
      icon: <Icon name="drag-move-line" />,
      suffix: '后缀',
      children: [
        {
          title: '子菜单1',
        },
        {
          title: '子菜单2',
        },
      ],
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
  const items1 = [
    {
      type: 'click',
      title: '菜单1111111',
    },
    {
      type: 'click',
      title: '菜单1111111',
    },
  ];
  const handleContextMenu = (item: ContextMenuItem, index: number) => {
    console.log('contextmenu:', item, index);
  };
  return (
    <div>
      <Divider>TriggerContextMenu</Divider>
      <Trigger id="menu1">
        <div>点我啊</div>
      </Trigger>
      <ContextMenu id="menu1" items={items} onContextMenu={handleContextMenu}></ContextMenu>
      <Trigger id="menu2">
        <div>点我啊111</div>
      </Trigger>
      <ContextMenu id="menu2" items={items1}></ContextMenu>
    </div>
  );
}
