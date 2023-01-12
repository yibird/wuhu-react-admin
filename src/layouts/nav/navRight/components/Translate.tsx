import React from "react";
import Icon from "@/components/Icon";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "简体中文",
  },
  {
    key: "2",
    label: "English",
  },
];

function Translate() {
  return (
    <Dropdown menu={{ items }}>
      <li className="px-10 hover:bg-[#f6f6f6] cursor-pointer">
        <Icon name="translate" size={18} />
      </li>
    </Dropdown>
  );
}

export default Translate;
