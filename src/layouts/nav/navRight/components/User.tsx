import React from "react";
import { Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "修改密码",
  },
  {
    key: "2",
    label: "锁屏",
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: "退出登录",
  },
];

function User() {
  return (
    <Dropdown menu={{ items }} placement="topLeft">
      <li className="px-10 hover:bg-[#f6f6f6] cursor-pointer">
        <Avatar style={{ backgroundColor: "red" }}>U</Avatar>
        <span className="ml-10">zchenfeng</span>
      </li>
    </Dropdown>
  );
}

export default User;
