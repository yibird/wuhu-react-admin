import React from 'react';
import { Divider, message } from 'antd';

import { Contextmenu, Trigger } from '@/components';
import type { ContextmenuItem } from '@/components';

export default function ContextMenuComp() {
  const handleClick = (item: ContextmenuItem) => {
    message.success(`点击了${item.type}`);
  };

  return (
    <div>
      <Divider>TriggerContextMenu</Divider>
      <Contextmenu id="menu1" onClick={handleClick}>
        <Contextmenu.Item type="type1" icon={1111} suffix={2222}>
          菜单1
        </Contextmenu.Item>
        <Contextmenu.Item type="type2">菜单2</Contextmenu.Item>
        <Contextmenu.Item type="type3" disabled>
          菜单3
        </Contextmenu.Item>
        <Contextmenu.SubMenu>
          <Contextmenu.Item type="type4">菜单1-1</Contextmenu.Item>
          <Contextmenu.Item type="type5">菜单2-1</Contextmenu.Item>
        </Contextmenu.SubMenu>
      </Contextmenu>
      <Trigger id="menu1">
        <div style={{ width: 200, height: 200, border: '1px solid red' }}>右键菜单</div>
      </Trigger>
    </div>
  );
}
