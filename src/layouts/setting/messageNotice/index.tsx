import React from "react";
import { Drawer, Tabs } from "antd";
import NoticePanel from "./components/NoticePanel";
import MessagePanel from "./components/MessagePanel";
import TodoListPanel from "./components/TodoListPanel";

export interface MessageNoticeProps {
  open?: boolean;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const items = [
  {
    key: "notice",
    title: "通知(10)",
    component: NoticePanel,
    list: [
      { type: 0, title: "这是一段标题", describe: "2023-01-01" },
      { type: 1, title: "今天是美好的一天", describe: "2023-01-02" },
      { type: 2, title: "超越极限", describe: "2023-01-02" },
    ],
  },
  {
    key: "message",
    title: "消息(10)",
    component: MessagePanel,
    list: [],
  },
  {
    key: "todoList",
    title: "待办(10)",
    component: TodoListPanel,
    list: [],
  },
];

function MessageNotice({ open, onClose }: MessageNoticeProps) {
  return (
    <Drawer
      title={"消息中心"}
      open={open}
      onClose={onClose}
      bodyStyle={{ padding: 0 }}
    >
      <Tabs centered className="tabs-full">
        {items.map((item) => {
          return (
            <Tabs.TabPane tab={item.title} key={item.key}>
              {React.createElement(item.component, { list: item.list })}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </Drawer>
  );
}

export default MessageNotice;
