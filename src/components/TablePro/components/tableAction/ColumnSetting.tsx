import React from "react";
import { Tooltip } from "antd";
import Icon from "@/components/Icon";

function ColumnSetting() {
  return (
    <Tooltip title="列设置">
      <span>
        <Icon size={20} name="settings-line" />
      </span>
    </Tooltip>
  );
}

export default ColumnSetting;
