import React, { useContext } from 'react';
import { Tooltip, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@/components';
import { useSharedState } from '../../context';
import type { TableSizeType } from '../../types';

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
export function TableSize() {
  const [{ size = 'small' }, setState] = useSharedState();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setState((prev) => ({ ...prev, size: key as TableSizeType }));
  };
  return (
    <Tooltip title="列大小">
      <Dropdown
        menu={{
          items,
          onClick,
          selectable: true,
          defaultSelectedKeys: [size],
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
