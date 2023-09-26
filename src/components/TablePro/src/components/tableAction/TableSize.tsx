import React, { useContext } from 'react';
import { Tooltip, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@/components';
import { TableContext } from '../../context';
import { TableSizeType } from '../../types';

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
function TableSize() {
  const { state, dispatch } = useContext(TableContext);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    dispatch({ type: 'setSize', payload: key as TableSizeType });
  };
  return (
    <Tooltip title="列大小">
      <Dropdown
        menu={{
          items,
          onClick,
          selectable: true,
          defaultSelectedKeys: [state.size || 'middle'],
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

export default TableSize;
