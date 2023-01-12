import React from "react";
import { Tooltip, Popover, Checkbox, Divider } from "antd";
import Icon from "@/components/Icon";

function ColumnItem() {
  return (
    <li>
      <div className="flex-y-center justify-between py-4 px-20">
        <div className="flex-y-center">
          <Icon size={20} name="drag-move-line" />
          <Checkbox className="ml-8">ID</Checkbox>
        </div>
        <div>asdasd</div>
      </div>
      <Divider className="m-0" />
    </li>
  );
}

function ColumnExportContent() {
  return (
    <div>
      <div className="py-8 px-20 border-solid-b-#f5f5f5">
        <Checkbox>列显示</Checkbox>
        <Checkbox>序号列</Checkbox>
        <Checkbox>选择列</Checkbox>
      </div>
      <ul className="max-h-200 overflow-y-auto">
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
      </ul>
    </div>
  );
}

function ColumnExport() {
  return (
    <Tooltip title="列导出">
      <Popover
        content={<ColumnExportContent />}
        placement="bottomRight"
        trigger={["click"]}
        overlayClassName="popover"
      >
        <span>
          <Icon size={20} name="refresh-line" />
        </span>
      </Popover>
    </Tooltip>
  );
}

export default ColumnExport;
