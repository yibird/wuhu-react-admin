import React from "react";
import { Tooltip, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Icon from "@/components/Icon";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "默认",
  },
  {
    key: "2",
    label: "中等",
  },
  {
    key: "3",
    label: "紧凑",
  },
];
function TableSize() {
  return (
    <Tooltip title="列大小">
      <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
        <span>
          <Icon size={20} name="font-size" />
        </span>
      </Dropdown>
    </Tooltip>
  );
}

export default TableSize;
