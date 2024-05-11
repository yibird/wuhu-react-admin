import React from 'react';
import type { ItemProps } from './types';
import { Icon } from '@/components';
import { Divider, Avatar } from 'antd';

function Item({ item, index, isLast = false, onDel }: ItemProps) {
  return (
    <div>
      <div className="flex-y-center p-10">
        <Avatar
          size={42}
          src={
            <img src="http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg" />
          }
        />
        <div className="flex-1 px-15">
          <div className="text-16">{item.title}</div>
          <div className="text-14 text-[#999] mt-5">{item.describe}</div>
        </div>
        <div>
          <Icon
            onClick={() => onDel && onDel(index)}
            size={20}
            name="delete-bin-line"
            className="hover:text-red"
          />
        </div>
      </div>
      {!isLast && <Divider style={{ margin: 0 }} />}
    </div>
  );
}
export default Item;
