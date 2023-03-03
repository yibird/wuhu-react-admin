import React from "react";
import type { ItemProps } from "./types";
import Icon from "@/components/Icon";
import { Divider } from "antd";

function Item({ item, index, isLast = false, onDel }: ItemProps) {
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
          <Icon
            onClick={() => onDel && onDel(index)}
            size={20}
            name="delete-bin-line"
            hoverColor="red"
          />
        </div>
      </div>
      {!isLast && <Divider style={{ margin: 0 }} />}
    </div>
  );
}
export default Item;
