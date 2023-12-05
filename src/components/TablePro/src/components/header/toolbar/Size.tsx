import React from 'react';
import { Tooltip, Dropdown } from 'antd';
import { Icon } from '@/components';
import { useSharedState } from '../../../context';
import type { MenuProps } from 'antd';
import type { TableSize } from '../../../types';

const items: MenuProps['items'] = [
  {
    key: 'large',
    label: '默认',
  },
  {
    key: 'middle',
    label: '中等',
  },
  {
    key: 'small',
    label: '紧凑',
  },
];
function Size() {
  const [{ action, size }, setState] = useSharedState();
  if (Array.isArray(action) && !action.includes('stripe')) return;

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setState((prev) => ({ ...prev, size: key as TableSize }));
  };
  return (
    <Tooltip title="列大小">
      <Dropdown
        menu={{
          items,
          onClick,
          selectable: true,
          defaultSelectedKeys: [size!],
        }}
        placement="bottom"
        trigger={['click']}
      >
        <span>
          <Icon size={20} name="font-size" />
        </span>
      </Dropdown>
    </Tooltip>
  );
}
export default Size;
