import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@/components';

interface TabActionProps extends BaseProps {
  closeCurrentTab: () => void;
  closeLeftTab: () => void;
  closeRightTab: () => void;
  closeOtherTab: () => void;
  closeAllTab: () => void;
}

const items: MenuProps['items'] = [
  {
    key: 'closeCurrentTab',
    label: '关闭当前标签页',
    icon: <Icon name="close-line" size={20} />,
  },
  {
    key: 'closeLeftTab',
    label: '关闭左侧标签页',
    icon: <Icon name="skip-back-line" size={20} />,
  },
  {
    key: 'closeRightTab',
    label: '关闭右侧标签页',
    icon: <Icon name="skip-forward-line" size={20} />,
  },
  {
    key: 'closeOtherTab',
    label: '关闭其他标签页',
    icon: <Icon name="stop-mini-fill" size={20} />,
  },
  {
    key: 'closeAllTab',
    label: '关闭所有标签页',
    icon: <Icon name="subtract-line" size={20} />,
  },
];

function TabAction({
  closeCurrentTab,
  closeLeftTab,
  closeRightTab,
  closeOtherTab,
  closeAllTab,
  style,
  className,
}: TabActionProps) {
  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log('asdasdasdasd:', key);
    switch (key) {
      case 'closeCurrentTab':
        closeCurrentTab();
        return;
      case 'closeLeftTab':
        closeLeftTab();
        return;
      case 'closeRightTab':
        closeRightTab();
        return;
      case 'closeOtherTab':
        closeOtherTab();
        return;
      case 'closeAllTab':
        closeAllTab();
        return;
    }
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottomRight">
      <div
        style={{
          position: 'absolute',
          right: 0,
          width: 40,
          height: '100%',
          display: 'grid',
          placeContent: 'center',
          ...style,
        }}
        className={className}
      >
        <Icon size={24} name="arrow-down-s-line" />
      </div>
    </Dropdown>
  );
}

export default TabAction;
