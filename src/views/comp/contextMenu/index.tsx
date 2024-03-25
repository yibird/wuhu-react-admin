import React from 'react';
import { Divider, message } from 'antd';
import { Contextmenu, Trigger, type ContextmenuItemProps, ContextMenuType } from '@/components';

const items: ContextMenuType[] = [
  {
    id: 'action1',
    title: 'menu1',
    icon: '111',
    suffix: '111',
  },
  {
    id: 'action2',
    title: 'menu2',
    icon: '222',
    suffix: '222',
  },
  {
    type: 'divider',
  },
  {
    title: 'menu3',
    children: [
      {
        id: 'action3',
        title: 'menu3-1',
        icon: '333',
      },
      {
        id: 'action4',
        title: 'menu3-3',
        icon: '444',
      },
    ],
  },
];
export default function ContextMenuComp() {
  const handleClick = (item: ContextmenuItemProps) => {
    message.success(`点击了${item.id}`);
  };
  return (
    <div>
      <Divider>TriggerContextMenu</Divider>
      <Contextmenu id="menu1" onClick={handleClick}>
        <Contextmenu.Item id="type1" icon={1111} suffix={2222}>
          菜单1
        </Contextmenu.Item>
        <Contextmenu.Item id="type2">菜单2</Contextmenu.Item>
        <Contextmenu.Item id="type3" disabled>
          菜单3
        </Contextmenu.Item>
        <Contextmenu.SubMenu title="嵌套菜单">
          <Contextmenu.Item id="type4">菜单1-1</Contextmenu.Item>
          <Contextmenu.Item id="type5">菜单2-1</Contextmenu.Item>
        </Contextmenu.SubMenu>
      </Contextmenu>
      <Trigger id="menu1">
        <div style={{ width: 200, height: 200, border: '1px solid red' }}>右键菜单</div>
      </Trigger>

      <Contextmenu id="menu2" items={items} onClick={handleClick} />
      <Trigger id="menu2">
        <div style={{ width: 200, height: 200, border: '1px solid red' }}>右键菜单</div>
      </Trigger>
    </div>
  );
}
