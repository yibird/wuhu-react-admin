import React from 'react';
import { Divider } from 'antd';

import { Contextmenu, Trigger } from '@/components';

export default function ContextMenuComp() {
  return (
    <div>
      <Divider>TriggerContextMenu</Divider>
      <Contextmenu id="menu1">
        <Contextmenu.Item icon={1111} suffix={2222}>
          菜单1
        </Contextmenu.Item>
        <Contextmenu.Item>菜单2</Contextmenu.Item>
        <Contextmenu.Item disabled>菜单3</Contextmenu.Item>
        <Contextmenu.SubMenu>
          <Contextmenu.Item>菜单1-1</Contextmenu.Item>
          <Contextmenu.Item>菜单2-1</Contextmenu.Item>
        </Contextmenu.SubMenu>
      </Contextmenu>
      <Trigger id="menu1">
        <div style={{ width: 200, height: 200, border: '1px solid red' }}>右键菜单</div>
      </Trigger>
    </div>
  );
}
