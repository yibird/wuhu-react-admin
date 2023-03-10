import React, { useContext } from "react";
import { Tooltip, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Icon from "@/components/Icon";
import { TableContext } from "../../context";
import { TableSizeType } from "../../types";

const items: MenuProps["items"] = [
  {
    key: "large",
    label: "默认",
  },
  {
    key: "middle",
    label: "中等",
  },
  {
    key: "small",
    label: "紧凑",
  },
];
function TableSize() {
  const { size, setSize } = useContext(TableContext);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setSize && setSize(key as TableSizeType);
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
        trigger={["click"]}
      >
        <span>
          <Icon size={20} name="font-size" />
        </span>
      </Dropdown>
    </Tooltip>
  );
}

export default TableSize;
