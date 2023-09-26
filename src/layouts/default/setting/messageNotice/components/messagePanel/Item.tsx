import React from 'react';
import type { ItemProps } from './types';
import { Icon } from '@/components';
import { Divider, Avatar } from 'antd';

function Item({ item, index, isLast = false, onDel }: ItemProps) {
  return (
    <div>
      <div className="flex-y-center p-10">
        <div className="cursor-pointer self-start py-8">
          <Avatar src={item.avatar} size={40} />
        </div>
        <div className="flex-1 px-15">
          <div className="text-16">{item.name}</div>
          <div className="text-16 my-2">{item.describe}</div>
          <div className="text-14 text-[#999]">{item.time}</div>
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
