import React from 'react';
import { Space, Divider } from 'antd';
import { TableRefresh, TableSize, ColumnSetting, ColumnExport } from '../setting';
import { Button } from '@/components/Button';

function TableAction() {
  return (
    <Space className="ml-15" size={2} split={<Divider type="vertical" />}>
      <TableRefresh />
      <TableSize />
      <ColumnSetting />
      {/* <ColumnExport /> */}
    </Space>
  );
}

export default TableAction;
