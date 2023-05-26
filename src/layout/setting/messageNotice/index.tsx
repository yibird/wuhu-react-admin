import React, { useState } from "react";
import { Drawer, Tabs } from "antd";
import NoticePanel from "./components/noticePanel";
import MessagePanel from "./components/messagePanel";
import TodoListPanel from "./components/TodoListPanel";
import type { MessageNoticeProps } from "./types";

const initialItems = [
  {
    key: "notice",
    label: "通知(10)",
    children: <NoticePanel />,
  },
  {
    key: "message",
    label: "消息(10)",
    children: <MessagePanel />,
  },
  {
    key: "todoList",
    label: "待办(10)",
    children: <TodoListPanel />,
  },
];

function MessageNotice({ open, onClose }: MessageNoticeProps) {
  const [items, setItems] = useState(() => initialItems);
  return (
    <Drawer
      title={"消息中心"}
      open={open}
      onClose={onClose}
      bodyStyle={{ padding: 0 }}
    >
      <Tabs centered className="tabs-full" items={items} />
    </Drawer>
  );
}

export default MessageNotice;
