import React from "react";
import Icon from "@/components/Icon";
import { Divider } from "antd";

interface Item {
  type: number;
  title: string;
  describe: string;
}

function Item({ item, isLast = false }: { item: Item; isLast?: boolean }) {
  return (
    <div>
      <div className="flex-y-center p-10">
        <div
          className="inline-block flex-center h-40 w-40 
      bg-[red] rounded-half cursor-pointer"
        >
          <Icon name="star-line" size={16} color="#fff" />
        </div>
        <div className="flex-1 px-15">
          <div className="text-16">{item.title}</div>
          <div className="text-14 text-[#999] mt-5">{item.describe}</div>
        </div>
        <div>
          <Icon size={20} name="delete-bin-line" hoverColor="red" />
        </div>
      </div>
      {!isLast && <Divider style={{ margin: 0 }} />}
    </div>
  );
}

function NoticePanel({ list = [] }: { list: Item[] }) {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex-1 overflow-y-auto">
        {list.map((item, index) => {
          return <Item item={item} isLast={list.length - 1 === index} />;
        })}
      </div>
      <div className="p-10">footer</div>
    </div>
  );
}

export default NoticePanel;
