import React from "react";
import { Space, Divider } from "antd";

import TableRefresh from "./TableRefresh";
import TableSize from "./TableSize";
import ColumnExport from "./ColumnExport";
import ColumnSetting from "./ColumnSetting";

function TableAction() {
  return (
    <Space size={5} split={<Divider type="vertical" />}>
      <TableRefresh />
      <TableSize />
      <ColumnExport />
      <ColumnSetting />
    </Space>
  );
}

export default TableAction;
