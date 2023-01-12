import React from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Icon from "@/components/Icon";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "关闭当前标签页",
    icon: <Icon name="close-line" size={20} />,
  },
  {
    key: "2",
    label: "关闭左侧标签页",
    icon: <Icon name="skip-back-line" size={20} />,
  },
  {
    key: "3",
    label: "关闭右侧标签页",
    icon: <Icon name="skip-forward-line" size={20} />,
  },
  {
    key: "4",
    label: "关闭其他标签页",
    icon: <Icon name="stop-mini-fill" size={20} />,
  },
  {
    key: "5",
    label: "关闭所有标签页",
    icon: <Icon name="subtract-line" size={20} />,
  },
];
function TabAction() {
  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <div className="tabs-control tabs-control-down">
        <Icon size={20} name="arrow-down-s-line" />
      </div>
    </Dropdown>
  );
}

export default TabAction;
