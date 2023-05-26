import React, { useState } from "react";
import type { Message } from "./types";
import List from "./List";
const initialList: Message[] = [
  {
    name: "zchengfeng",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
    describe: "这是一段标题",
    time: "2023-01-01",
  },
  {
    name: "zhangsan",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
    describe: "今天是美好的一天",
    time: "2023-01-02",
  },
  {
    name: "lisi",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
    describe: "超越极限",
    time: "2023-01-02",
  },
];

function MessagePanel() {
  const [list, setList] = useState<Message[]>(() => initialList);

  const onDel = (index: number) => {
    setList(list.filter((_, n) => n !== index));
  };
  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex-1 overflow-y-auto">
        <List list={list} onDel={onDel} />
      </div>
      <div className="p-10">footer</div>
    </div>
  );
}

export default MessagePanel;
