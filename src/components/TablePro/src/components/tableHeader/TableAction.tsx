import React from 'react';
import { Space, Divider } from 'antd';
import { TableRefresh, TableSize, ColumnSetting, ColumnExport } from '../setting';

function TableAction() {
  return (
    <Space className="ml-auto" size={5} split={<Divider type="vertical" />}>
      <TableRefresh />
      <TableSize />
      <ColumnSetting />
      {/* <ColumnExport /> */}
    </Space>
  );
}

export default TableAction;
